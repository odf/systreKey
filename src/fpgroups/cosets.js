import * as fw         from './freeWords';
import * as generators from '../common/generators';

import { Partition } from '../common/unionFind';


const range = (from, to) => {
  if (to < from)
    return new Array(from - to).fill(0).map((_, i) => from - i);
  else
    return new Array(to - from).fill(0).map((_, i) => from + i);
};


const allGens = function*(nrGens) {
  for (let i = 1; i <= nrGens; ++i)
    yield i;
  for (let i = 1; i <= nrGens; ++i)
    yield -i;
}


class CosetTable {
  constructor(nrGens) {
    this.nrGens = nrGens;
    this.table = [new Array(2 * nrGens + 1)];
    this.part = new Partition();
  }

  clone() {
    const t = new CosetTable(this.nrGens);
    t.table = this.table.slice().map(row => row.slice());
    t.part = this.part.clone();
    return t;
  }

  allGens() {
    return allGens(this.nrGens)
  }

  get size() {
    return this.table.length;
  }

  get(c, g) {
    return (this.table[c] || [])[g + this.nrGens];
  }

  set(c, g, d) {
    if (this.table[c] == null)
      this.table[c] = new Array(2 * this.nrGens + 1);
    this.table[c][g + this.nrGens] = d;
  }

  join(c, d, g) {
    this.set(c, g, d);
    this.set(d, -g, c);
  }

  canon(c) {
    return this.part.find(c);
  }

  identify(a, b) {
    const queue = [[a, b]];

    while (queue.length) {
      const [a, b] = queue.shift().map(x => this.canon(x));

      if (a != b) {
        this.part.union(a, b);

        for (const g of this.allGens()) {
          const ag = this.get(a, g);
          const bg = this.get(b, g);
          if (ag == null)
            this.set(a, g, bg);
          else {
            if (bg != null && this.canon(ag) != this.canon(bg))
              queue.push([ag, bg]);
            this.set(b, g, ag);
          }
        }
      }
    }
  }

  asCompactMatrix() {
    const toIdx = {};
    let i = 0;
    for (const k of range(0, this.table.length)) {
      if (this.canon(k) == k) {
        toIdx[k] = i;
        ++i;
      }
    }

    const result = [];
    for (const k of range(0, this.table.length)) {
      if (toIdx[k] != null) {
        const row = {};
        for (const g of this.allGens())
          row[g] = toIdx[this.canon(this.get(k, g))];
        result.push(row);
      }
    }

    return result;
  }
}


const scan = (table, w, start, limit) => {
  let [row, i] = [start, 0];

  while (i < limit && table.get(row, w[i]) != null)
    [row, i] = [table.get(row, w[i]), i + 1];

  return { row, index: i };
};


const scanBothWays = (table, w, start) => {
  const n = w.length;
  const { row: head, index: i } = scan(table, w, start, n);
  const { row: tail, index: j } = scan(table, fw.inverse(w), start, n - i);

  return { head, tail, gap: n - i - j, c: w[i] };
};


const scanAndIdentify = (table, w, start) => {
  const { head, tail, gap, c } = scanBothWays(table, w, start);

  if (gap == 1)
    table.join(head, tail, c);
  else if (gap == 0 && head != tail)
    table.identify(head, tail);
};


const _insertInOrderedSet = (elm, set, cmp) => {
  let i = 0;
  while (i < set.length && cmp(elm, set[i]) < 0)
    ++i;
  if (i >= set.length || cmp(elm, set[i]) != 0)
    set.splice(i, 0, elm);
};


const _expandRelators = relators => {
  const out = [];
  for (const rel of relators) {
    for (const w of fw.relatorPermutations(rel))
      _insertInOrderedSet(w, out, fw.compare);
  }
  return out;
};


export const cosetTable = (nrGens, relators, subgroupGens) => {
  const rels = _expandRelators(relators);
  const table = new CosetTable(nrGens);

  for (let i = 0; i < table.size; ++i) {
    if (i != table.canon(i))
      continue;

    for (const g of table.allGens()) {
      if (table.get(i, g) == null) {
        const n = table.size;
        if (n >= 10000)
          throw new Error('maximum coset table size reached');

        table.join(i, n, g);
        for (const w of rels)
          scanAndIdentify(table, w, n);
        for (const w of subgroupGens)
          scanAndIdentify(table, fw.word(w), table.canon(0));
      }
    }
  }

  return table.asCompactMatrix();
};


export const cosetRepresentatives = table => {
  const queue = [0];
  const reps = [fw.empty];

  while (queue.length) {
    const i = queue.shift();
    const w = reps[i];

    for (const g of Object.keys(table[i])) {
      const k = table[i][g];
      if (reps[k] == null) {
        reps[k] = fw.product([w, [parseInt(g)]]);
        queue.push(k);
      }
    }
  }

  return reps;
};


const _firstFreeInTable = table => {
  for (const k of range(0, table.size)) {
    for (const g of table.allGens()) {
      if (table.get(k, g) == null)
        return [k, g];
    }
  }
};


const _closeGapsRecursively = (rels, table, index) => {
  const q = [index];

  while (q.length) {
    const row = q.shift();

    for (const rel of rels) {
      const { head, tail, gap, c } = scanBothWays(table, rel, row);
      if (gap == 1) {
        table.join(head, tail, c);
        q.push(head);
      }
      else if (gap == 0 && head != tail)
        return false;
    }
  }

  return true;
};


const _potentialChildren = (table, rels, maxCosets) => {
  const [k, g] = _firstFreeInTable(table) || [];
  const limit = Math.min(table.size + 1, maxCosets);
  const result = [];

  if (k != null) {
    for (const pos of range(k, limit)) {
      if (table.get(pos, -g) == null) {
        const t = table.clone();
        t.join(k, pos, g);
        if (_closeGapsRecursively(rels, t, k))
          result.push(t);
      }
    }
  }

  return result;
};


const _compareRenumberedFom = (table, start) => {
  const n2o = [start];
  const o2n = { [start]: 0 };

  for (let row = 0; row < table.size; ++row) {
    if (row >= n2o.length)
      throw new Error("coset table is not transitive");

    for (const g of table.allGens()) {
      const t = table.get(n2o[row], g);
      if (t != null && o2n[t] == null) {
        o2n[t] = n2o.length;
        n2o.push(t);
      }

      const nval = o2n[t];
      const oval = table.get(row, g);
      if (oval != nval)
        return oval == null ? -1 : nval == null ? 1 : nval - oval;
    }
  }

  return 0;
};


const _isCanonical = table => range(1, table.size)
  .every(start => _compareRenumberedFom(table, start) >= 0);


export const tables = (nrGens, relators, maxCosets) => {
  const rels = _expandRelators(relators);

  return generators.backtracker({
    root: new CosetTable(nrGens),

    extract(table) {
      return _firstFreeInTable(table) ? null : table.asCompactMatrix();
    },

    children(table) {
      return _potentialChildren(table, rels, maxCosets).filter(_isCanonical);
    }
  });
};


const _inducedTable = (nrGens, img, img0) => {
  const table = new CosetTable(nrGens);
  const o2n = { [img0]: 0 };
  const n2o = [img0];

  for (let i = 0; i < table.size; ++i) {
    for (const g of table.allGens()) {
      const k = img(n2o[i], g);
      if (o2n[k] == null)
        o2n[k] = table.size;
      const n = o2n[k];
      n2o[n] = k;
      table.join(i, n, g);
    }
  }

  return table.asCompactMatrix();
};


export const intersectionTable = (tableA, tableB) =>
  _inducedTable(
    Math.max(...Object.keys(tableA[0])),
    ([a, b], g) => [tableA[a][g], tableB[b][g]],
    [0, 0]
  );


export const coreTable = base =>
  _inducedTable(
    Math.max(...Object.keys(base[0])),
    (es, g) => es.map(e => base[e][g]),
    range(0, base.length)
  );


export const relatorAsVector = (rel, nrgens) => {
  const out = new Array(nrgens).fill(0);

  for (const w of rel) {
    if (w < 0)
      --out[-w - 1];
    else if (w > 0)
      ++out[w - 1];
  }

  return out;
};


export const relatorMatrix = (nrgens, relators) =>
  relators.map(rel => relatorAsVector(rel, nrgens));


if (require.main == module) {
  Array.prototype.toString = function() {
    return '[ ' + this.map(x => x && x.toString()).join(', ') + ' ]';
  };

  const test = table => {
    const reps = cosetRepresentatives(table);
    console.log(JSON.stringify(reps), Object.keys(reps).length);
  };

  const base = cosetTable(
    3,
    [[1,1], [2,2], [3,3], [1,2,1,2,1,2], [1,3,1,3], fw.raisedTo(3, [2,3])],
    [[1,2]]);

  test(base);
  test(coreTable(base));

  console.log(_expandRelators([[1,2,-3]]));

  for (const x of generators.results(tables(2, [[1,1],[2,2],[1,2,1,2]], 8)))
    console.log(JSON.stringify(x));
}
