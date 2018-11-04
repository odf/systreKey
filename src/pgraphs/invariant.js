import * as pg from './periodic';
import * as ps from './symmetries';

import { rationalLinearAlgebra,
         rationalLinearAlgebraModular } from '../arithmetic/arithmetic';

const ops = rationalLinearAlgebra;


const _solveInRows = (v, M) =>
  ops.transposed(ops.solve(ops.transposed(M), ops.transposed(v)));


const _traversal = function(graph, v0, transform, adj) {
  const zero = ops.vector(graph.dim);

  const pos = pg.barycentricPlacement(graph);
  const old2new = {[v0]: 1};
  const newPos = { [v0]: ops.times(pos[v0], transform) };
  const queue = [[v0, zero]];
  const essentialShifts = [];

  let nextIndex = 2;
  let basisAdjustment = null;
  let vn = 0;
  let neighbors = [];

  const next = () => {
    while (neighbors.length || queue.length) {
      while (neighbors.length) {
        const [wo, s, p] = neighbors.shift();
        const wn = old2new[wo];
        if (wn == null) {
          old2new[wo] = nextIndex;
          newPos[wo] = p;
          queue.push([wo, s]);
          return { value: [vn, nextIndex++, zero] };
        }
        else if (wn < vn)
          continue;
        else {
          const rawShift = ops.minus(p, newPos[wo]);
          let shift;
          if (basisAdjustment != null)
            shift = ops.times(rawShift, basisAdjustment);
          else if (ops.sgn(rawShift) == 0)
            shift = rawShift;
          else {
            if (essentialShifts.length)
              shift = _solveInRows(rawShift, essentialShifts);

            if (shift == null) {
              shift = ops.unitVector(graph.dim, essentialShifts.length);
              essentialShifts.push(rawShift);
              if (essentialShifts.length == graph.dim)
                basisAdjustment = ops.inverse(essentialShifts);
            }
            else
              shift = shift[0].concat(ops.vector(graph.dim - shift[0].length));
          }
          if (vn < wn || (vn == wn && ops.sgn(shift) < 0))
            return { value: [vn, wn, shift] };
        }
      }

      if (queue.length) {
        const [vo, vShift] = queue.shift();
        vn = old2new[vo];

        for (const e of pg.allIncidences(graph, vo, adj)) {
          const w = e.tail;
          const s = ops.plus(vShift, ops.times(e.shift, transform));
          neighbors.push([w, s, ops.plus(s, ops.times(pos[w], transform))]);
        }

        neighbors.sort(([wa, sa, pa], [wb, sb, pb]) => ops.cmp(pa, pb));
      }
    }

    return { done: true };
  };

  return { next };
};


const _postprocessTraversal = trav => {
  let basis = null;
  for (const [head, tail, shift] of trav)
    basis = rationalLinearAlgebraModular.extendBasis(shift, basis);
  basis = basis.map(v => ops.sgn(v) < 0 ? ops.negative(v) : v);

  const basisChange = ops.inverse(basis);

  return trav.map(([head, tail, shift]) => {
    const newShift = ops.times(shift, basisChange);

    if (newShift.some(x => !ops.isInteger(x)))
      throw new Error("panic: produced non-integer shift");

    if (head == tail && ops.sgn(newShift) > 0)
      return [head, tail, ops.negative(newShift)];
    else
      return [head, tail, newShift];
  });
};


const _lazySeq = generator => {
  const s = generator.next();

  if (s.done)
    return null;
  else {
    const obj = {
      first: () => s.value,
      rest: () => {
        const val = (() => _lazySeq(generator))();
        obj.rest = () => val;
        return val;
      }
    };

    return obj;
  }
};


const _seqToArray = s => {
  const a = [];

  while (s != null) {
    a.push(s.first());
    s = s.rest();
  }

  return a;
};


const invariant = graph => {
  const adj = pg.adjacencies(graph);
  const pos = pg.barycentricPlacement(graph);
  const edgeListReps = ps.representativeEdgeLists(graph);

  const _cmpSteps = ([headA, tailA, shiftA], [headB, tailB, shiftB]) =>
    (headA - headB) || (tailA - tailB) || ops.cmp(shiftA, shiftB);

  let best = null;

  for (const edgeList of edgeListReps) {
    const transform = ops.inverse(edgeList.map(e => pg.edgeVector(e, pos)));
    const trav = _lazySeq(_traversal(graph, edgeList[0].head, transform, adj));

    if (best == null)
      best = trav;
    else {
      let [t, b] = [trav, best];

      while (t != null && _cmpSteps(t.first(), b.first()) == 0)
        [t, b] = [t.rest(), b.rest()];

      if (t != null && _cmpSteps(t.first(), b.first()) < 0)
        best = trav;
    }
  }

  return _postprocessTraversal(_seqToArray(best)).sort(_cmpSteps);
};


export const systreKey = edges => {
  const graph = pg.make(edges);

  if (!pg.isConnected(graph))
    throw new Error(`net is not connected`);
  else if (!pg.isLocallyStable(graph))
    throw new Error(`net is not locally stable`);
  else {
    const seq = [graph.dim];

    for (const [from, to, shift] of invariant(ps.minimalImage(graph))) {
      seq.push(from);
      seq.push(to);
      for (const x of shift)
        seq.push(x);
    }

    return seq.join(' ');
  }
};


export const keyVersion = '1.0';
