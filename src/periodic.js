import * as pickler from './pickler';

import { rationalLinearAlgebra,
         rationalLinearAlgebraModular } from './arithmetic';

import modularSolver from './solveRational';


export const ops = rationalLinearAlgebra;

const encode = pickler.serialize;
const decode = pickler.deserialize;


class VectorLabeledEdge {
  constructor(head, tail, shift) {
    this.head = head;
    this.tail = tail;
    this.shift = shift;
  }

  toString() {
    return `VectorLabeledEdge(${this.head}, ${this.tail}, ${this.shift})`;
  }

  reverse() {
    return new VectorLabeledEdge(
      this.tail, this.head, rationalLinearAlgebra.negative(this.shift));
  }

  canonical() {
    if (this.tail < this.head
        || (this.tail == this.head && this.shift.find(x => x != 0) < 0)
       )
      return this.reverse();
    else
      return this;
  }

  get __typeName() { return 'VectorLabeledEdge'; }
};


class Graph {
  constructor(dim, edges) {
    this.dim = dim;
    this.edges = edges;
  }

  toString() {
    return `PGraph(${this.edges})`;
  }

  get __typeName() { return 'PeriodicGraph'; }
};


pickler.register(
  'VectorLabeledEdge',
  ({ head, tail, shift }) => ({ head, tail, shift }),
  ({ head, tail, shift }) => new VectorLabeledEdge(head, tail, shift)
);


pickler.register(
  'PeriodicGraph',
  ({ dim, edges }) => ({ dim, edges: pickler.pickle(edges) }),
  ({ dim, edges }) => new Graph(dim, pickler.unpickle(edges))
);


const dedupe = as => {
  const seen = {};
  const out = [];

  for (const a of as) {
    if (!seen[a]) {
      seen[a] = true;
      out.push(a);
    }
  }

  return out;
};


export const makeEdge = (head, tail, shift) =>
  new VectorLabeledEdge(head, tail, shift);


export const make = data => {
  const edges = dedupe(data.map(([h, t, s]) => makeEdge(h, t, s).canonical()));

  if (edges.length == 0)
    throw new Error('cannot be empty');

  const dim = edges[0].shift.length;
  if (edges.some(e => e.shift.length != dim))
    throw new Error('must have consistent shift dimensions');

  return new Graph(dim, edges);
};


export const vertices = graph => {
  const verts = [];
  for (const e of graph.edges) {
    verts.push(e.head);
    verts.push(e.tail);
  }
  return dedupe(verts);
};


export const adjacencies = graph => {
  const target = e => ({ v: e.tail, s: e.shift });

  const res = {};
  for (const e of graph.edges) {
    if (res[e.head] == null)
      res[e.head] = [];
    res[e.head].push(target(e));

    if (res[e.tail] == null)
      res[e.tail] = [];
    res[e.tail].push(target(e.reverse()));
  }
  return res;
};


const _componentInOrbitGraph = (graph, start) => {
  const adj = adjacencies(graph);
  const bridges = [];
  const nodes = [start];
  const nodeShifts = { [start]: ops.vector(graph.dim) };

  for (let i = 0; i < nodes.length; ++i) {
    const v = nodes[i];
    const av = nodeShifts[v];

    for (const {v: w, s: shift} of adj[v]) {
      if (nodeShifts[w] == null) {
        nodes.push(w);
        nodeShifts[w] = ops.minus(av, shift);
      }
      else {
        const aw = nodeShifts[w];
        const newShift = ops.plus(shift, ops.minus(aw, av));
        if (ops.sgn(newShift) > 0)
          bridges.push({ v, w, s: newShift });
      }
    }
  }

  return { nodes, nodeShifts, bridges };
};


const _makeBasis = M => {
  let basis = null;
  for (const row of M)
    basis = rationalLinearAlgebraModular.extendBasis(row, basis);
  return basis;
};


const _makeCoordinateTransform = (B, dim) => {
  if (B.length < dim) {
    B = B.slice();
    for (const vec of ops.identityMatrix(dim)) {
      if (ops.rank(B.concat([vec])) > ops.rank(B))
        B.push(vec);
    }
  }

  return ops.inverse(B);
};


const _componentInCoverGraph = (graph, start) => {
  const { nodes, nodeShifts, bridges } = _componentInOrbitGraph(graph, start);
  const basis = _makeBasis(bridges.map(b => b.s));
  const dim = basis.length;
  const transform = _makeCoordinateTransform(basis, graph.dim);

  const old2new = {};
  for (let i = 0; i < nodes.length; ++i)
    old2new[nodes[i]] = i + 1;

  const newEdges = graph.edges
    .filter(({ head, tail }) => old2new[head] != null && old2new[tail] != null)
    .map(({ head, tail, shift }) => {
      const [v, w] = [old2new[head], old2new[tail]];
      const [av, aw] = [nodeShifts[head], nodeShifts[tail]];
      const t = ops.times(ops.plus(shift, ops.minus(aw, av)), transform);
      return [v, w, t.slice(0, dim)];
    });

  const multiplicity = dim == graph.dim ? ops.abs(ops.determinant(basis)) : 0;

  return { basis, multiplicity, nodes, graph: make(newEdges) };
};


export const isConnected = graph => {
  const verts = vertices(graph);
  const comp = _componentInCoverGraph(graph, verts[0]);

  return comp.nodes.length >= verts.length && comp.multiplicity == 1;
};


export const barycentricPlacement = graph => {
  if (graph._$pos != undefined)
    return graph._$pos;

  const adj   = adjacencies(graph);
  const verts = vertices(graph);

  const vIdcs = {};
  for (let i = 0; i < verts.length; ++i)
    vIdcs[verts[i]] = i;

  const n = verts.length;
  const d = graph.dim;
  let A = ops.matrix(n, n);
  let t = ops.matrix(n, d);

  A[0][0] = 1;

  for (let i = 1; i < n; ++i) {
    const v = verts[i];
    for (const { v: w, s } of adj[v]) {
      if (w != v) {
        const j = vIdcs[w];
        A[i][j] -= 1;
        A[i][i] += 1;
        t[i] = ops.plus(t[i], s);
      }
    }
  }

  const p = modularSolver(A, t);

  const result = {};
  for (let i = 0; i < n; ++i)
    result[verts[i]] = p[i];

  graph._$pos = result;

  return result;
};


export const isLocallyStable = graph => {
  const pos = barycentricPlacement(graph);

  const adj = adjacencies(graph);
  const verts = vertices(graph);

  for (const v of verts) {
    const seen = {};

    for (const { v: w, s } of adj[v]) {
      const key = encode(ops.plus(pos[w], s));
      if (seen[key])
        return false;
      else
        seen[key] = true;
    }
  }

  return true;
};


export const allIncidences = (graph, v, adj=adjacencies(graph)) =>
  adj[v].map(({v: w, s}) => makeEdge(v, w, s));


export const edgeVector = (e, pos) =>
  ops.plus(e.shift, ops.minus(pos[e.tail], pos[e.head]));
