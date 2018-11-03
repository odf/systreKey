import * as pickler from '../common/pickler';
import * as part from '../common/unionFind';

import * as pg from './periodic';
import { rationalLinearAlgebra,
         rationalLinearAlgebraModular } from '../arithmetic/types';


const ops = rationalLinearAlgebra;

const encode = pickler.serialize;
const decode = pickler.deserialize;


const _directedEdges = graph => {
  const out = [];
  for (const e of graph.edges) {
    out.push(e);
    out.push(e.reverse());
  }
  return out;
};


const _permutations = n => {
  const p = [];
  for (let i = 1; i <= n; ++i)
    p.push(i);

  const result = [];

  while (true) {
    let i, j;

    result.push(p.slice());

    for (i = n-2; i >= 0 && p[i] > p[i+1]; --i)
      ;
    if (i < 0)
      break;

    for (j = n-1; p[j] < p[i]; --j)
      ;

    [p[i], p[j]] = [p[j], p[i]];

    for (++i, j = n-1; i < j; ++i, --j)
      [p[i], p[j]] = [p[j], p[i]];
  }

  return result;
};


const _combinations = (m, k) => {
  if (k == 0) {
    return [[]];
  }
  else {
    const result = [];

    for (let i = 1; i <= m - k + 1; ++i) {
      for (const c of _combinations(m - i, k - 1)) {
        result.push([i].concat(c.map(x => x + i)));
      }
    }

    return result;
  }
};


const _goodCombinations = (edges, pos) => {
  const dim = ops.dimension(edges[0].shift);
  const results = [];

  for (const c of _combinations(edges.length, dim)) {
    const vectors = c.map(i => pg.edgeVector(edges[i - 1], pos));
    if (ops.rank(vectors) == dim) {
      for (const p of _permutations(dim))
        results.push(p.map(i => edges[c[i - 1] - 1]));
    }
  }

  return results;
};


const _goodEdgeChains = graph => {
  const adj = pg.adjacencies(graph);
  const pos = pg.barycentricPlacement(graph);
  const dim = graph.dim;
  const results = [];

  const extend = es => {
    if (es.length == dim)
      results.push(es);
    else {
      const v = es[es.length - 1].tail;
      for (const e of pg.allIncidences(graph, v, adj)) {
        const next = es.concat([e]);
        const M = next.map(e => pg.edgeVector(e, pos));
        if (ops.rank(M) == next.length)
          extend(next);
      }
    }
  };

  for (const e of _directedEdges(graph))
    extend([e]);

  return results;
};


const characteristicEdgeLists = graph => {
  const adj = pg.adjacencies(graph);
  const pos = pg.barycentricPlacement(graph);

  const stars = [].concat(...pg.vertices(graph).map(
    v => _goodCombinations(pg.allIncidences(graph, v, adj), pos)));
  if (stars.length)
    return stars;

  const chains = _goodEdgeChains(graph);
  if (chains.length)
    return chains;

  return _goodCombinations(_directedEdges(graph), pos);
};


const automorphism = (graph, start1, start2, transform, edgeByVec) => {
  const src2img = { [start1]: start2 };
  const queue = [[start1, start2]];

  while (queue.length) {
    const [w1, w2] = queue.shift();

    for (const [d1, e1] of Object.entries(edgeByVec[w1])) {
      const e2 = edgeByVec[w2][encode(ops.times(decode(d1), transform))];
      if (e2 == null)
        return null;

      src2img[encode(e1)] = encode(e2);

      if (src2img[e1.tail] == null) {
        src2img[e1.tail] = e2.tail;
        queue.push([e1.tail, e2.tail]);
      }
      else if (src2img[e1.tail] != e2.tail)
        return null;
    }
  }

  return { src2img, transform };
};


export const isMinimal = graph => {
  const id = ops.identityMatrix(graph.dim);
  const verts = pg.vertices(graph);
  const start = verts[0];
  const pos = pg.barycentricPlacement(graph);
  const adj = pg.adjacencies(graph);
  const ebv = edgesByVector(graph, pos, adj);

  for (const v of verts.slice(1)) {
    if (automorphism(graph, start, v, id, ebv) != null)
      return false;
  }

  return true;
}


const translationalEquivalences = graph => {
  const id = ops.identityMatrix(graph.dim);
  const verts = pg.vertices(graph);
  const start = verts[0];
  const pos = pg.barycentricPlacement(graph);
  const adj = pg.adjacencies(graph);
  const ebv = edgesByVector(graph, pos, adj);

  const p = new part.Partition();

  for (const v of verts) {
    if (p.find(start) != p.find(v)) {
      const iso = automorphism(graph, start, v, id, ebv);
      if (iso != null) {
        for (const w of verts)
          p.union(w, iso.src2img[w]);
      }
    }
  }

  return p;
};


const extraTranslationVectors = (graph, equivs) => {
  const pos = pg.barycentricPlacement(graph);
  const verts = pg.vertices(graph);
  const class0 = equivs.find(verts[0]);
  const pos0 = pos[verts[0]];
  const vectors = [];

  for (const v of verts.slice(1)) {
    if (equivs.find(v) == class0)
      vectors.push(ops.mod(ops.minus(pos[v], pos0), 1));
  }

  return vectors;
};


const equivalenceClasses = (equivs, elements) => {
  const repToClass = {};
  const classes = [];

  for (const v of elements) {
    const rep = equivs.find(v);
    if (repToClass[rep] == null) {
      repToClass[rep] = classes.length;
      classes.push([v]);
    }
    else
      classes[repToClass[rep]].push(v);
  }

  return classes;
};


const translationalEquivalenceClasses = (graph, equivs) =>
  equivalenceClasses(equivs, pg.vertices(graph));


const fullTranslationBasis = vectors => {
  let basis = ops.identityMatrix(vectors[0].length);
  for (const v of vectors)
    basis = rationalLinearAlgebraModular.extendBasis(v, basis);
  return basis;
};


export const minimalImage = graph => {
  if (isMinimal(graph))
    return graph;
  else {
    const pos = pg.barycentricPlacement(graph);
    const equivs = translationalEquivalences(graph);
    const classes = translationalEquivalenceClasses(graph, equivs);
    const vectors = extraTranslationVectors(graph, equivs);
    const basisChange = ops.inverse(fullTranslationBasis(vectors));

    const old2new = {};
    for (let i = 0; i < classes.length; ++i) {
      for (const v of classes[i])
        old2new[v] = i;
    }

    const imgEdges = [];
    for (const { head: v, tail: w, shift: s } of graph.edges) {
      const vNew = old2new[v];
      const wNew = old2new[w];
      const vShift = ops.minus(pos[v], pos[classes[vNew][0]]);
      const wShift = ops.minus(pos[w], pos[classes[wNew][0]]);
      const sNew = ops.times(ops.plus(s, ops.minus(wShift, vShift)),
                             basisChange);

      imgEdges.push([vNew + 1, wNew + 1, sNew]);
    }

    return pg.make(imgEdges);
  }
};


const isUnimodular = A =>
  A.every(row => row.every(x => ops.isInteger(x))) &&
  ops.eq(1, ops.abs(ops.determinant(A)));


const edgesByVector = (graph, pos, adj) => {
  const result = {};

  for (const v of pg.vertices(graph)) {
    const m = result[v] = {};
    for (const e of pg.allIncidences(graph, v, adj))
      m[encode(pg.edgeVector(e, pos))] = e;
  }

  return result;
};


const goodEdgeLists = (graph, edgeLists) => {
  const adj = pg.adjacencies(graph);

  const atLoop = edgeLists.filter(edgeList => {
    const v = edgeList[0].head;
    return adj[v].every(e => e.tail == v);
  });

  if (atLoop.length > 0)
    return atLoop;

  const atLune = edgeLists.filter(edgeList => {
    const v = edgeList[0].head;
    const neighbours = adj[v].map(e => e.tail).sort();
    return neighbours.some((w, i) => i > 0 && w == neighbours[i - 1]);
  });

  if (atLune.length > 0)
    return atLune;

  const maxDeg = Object.keys(adj).map(v => adj[v].length).max();
  return edgeLists.filter(edgeList => adj[edgeList[0].head].length == maxDeg);
};


export const representativeEdgeLists = graph => {
  const pos = pg.barycentricPlacement(graph);

  if (!pg.isLocallyStable(graph))
    throw new Error('graph is not locally stable; cannot compute symmetries');

  const ebv = edgesByVector(graph, pos, pg.adjacencies(graph));

  const edgeLists = goodEdgeLists(graph, characteristicEdgeLists(graph));
  const bases = edgeLists.map(es => ({
    v: es[0].head,
    B: es.map(e => pg.edgeVector(e, pos))
  }));
  const keys = edgeLists.map(encode);
  const mapped = (es, phi) => es.map(e => decode(phi.src2img[encode(e)]));

  const v0 = bases[0].v;
  const invB0 = ops.inverse(bases[0].B);

  const I = ops.identityMatrix(graph.dim);

  const p = new part.Partition((a, b) => a || b);

  for (let i = 0; i < edgeLists.length; ++i) {
    if (p.find(keys[i]) != p.find(keys[0]) && !p.getLabel(keys[i])) {
      const { v, B } = bases[i];
      const M = ops.times(invB0, B);
      const iso = isUnimodular(M) && automorphism(graph, v0, v, M, ebv);

      if (iso) {
        for (let k = 0; k < edgeLists.length; ++k)
          p.union(keys[k], encode(mapped(edgeLists[k], iso)));
      }
      else
        p.setLabel(keys[i], true);
    }
  }

  return keys.filter(k => k == p.find(k)).map(decode);
};
