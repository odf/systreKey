import { rationalLinearAlgebraModular } from '../arithmetic/types';
import { coordinateChangesQ } from './types';
import { lattices } from './lattices';
import operator from './parseOperator';
import * as sg from './spacegroups';
import * as sgtable from './sgtable';

const reducedBasis = rationalLinearAlgebraModular.reducedBasis;
const V = coordinateChangesQ;
const { dirichletVectors, reducedLatticeBasis } = lattices(V);


const CS_0D              = "Crystal System 0d";
const CS_1D              = "Crystal System 1d";

const CS_2D_OBLIQUE      = "Crystal System 2d Oblique";
const CS_2D_RECTANGULAR  = "Crystal System 2d Rectangular";
const CS_2D_SQUARE       = "Crystal System 2d Square";
const CS_2D_HEXAGONAL    = "Crystal System 2d Hexagonal";

const CS_3D_CUBIC        = "Crystal System 3d Cubic";
const CS_3D_ORTHORHOMBIC = "Crystal System 3d Orthorhombic";
const CS_3D_HEXAGONAL    = "Crystal System 3d Hexagonal";
const CS_3D_TETRAGONAL   = "Crystal System 3d Tetragonal";
const CS_3D_TRIGONAL     = "Crystal System 3d Trigonal";
const CS_3D_MONOCLINIC   = "Crystal System 3d Monoclinic";
const CS_3D_TRICLINIC    = "Crystal System 3d Triclinic";


const mappedCrystalSystem = {
  [CS_2D_OBLIQUE     ]: 'oblique',
  [CS_2D_RECTANGULAR ]: 'rectangular',
  [CS_2D_SQUARE      ]: 'square',
  [CS_2D_HEXAGONAL   ]: 'hexagonal',
  [CS_3D_CUBIC       ]: 'cubic',
  [CS_3D_ORTHORHOMBIC]: 'orthorhombic',
  [CS_3D_HEXAGONAL   ]: 'hexagonal',
  [CS_3D_TETRAGONAL  ]: 'tetragonal',
  [CS_3D_TRIGONAL    ]: 'trigonal',
  [CS_3D_MONOCLINIC  ]: 'monoclinic',
  [CS_3D_TRICLINIC   ]: 'triclinic'
};


const matrixOrder = (M, max) => {
  const I = V.identityMatrix(V.dimension(M));
  let A = M;
  for (let i = 1; i <= max; ++i) {
    if (V.eq(A, I))
      return i;
    A = V.times(A, M);
  }
  return 0;
};


const sgnDet = M => V.sgn(V.determinant(M));


const operatorAxis = op => {
  const d = V.dimension(op);

  let M = V.linearPart(op);
  if (d % 2 != 0 && sgnDet(M) < 0)
    M = V.negative(M);

  const R = V.minus(M, V.identityMatrix(d));
  const Z = V.transposed(V.nullSpace(R) || []);

  if (Z.length != 1)
    return null;
  else {
    const v = Z[0];
    return V.sgn(v) < 0 ? V.negative(v) : v;
  }
};


const vectorsCollinear = (v, w) =>
  V.eq(V.times(V.times(v, w), V.times(v, w)),
       V.abs(V.times(V.times(v, v), V.times(w, w))));


const vectorsOrthogonal = (v, w) => V.eq(0, V.times(v, w));


const operatorType = op => {
  const dimension = V.dimension(op);
  const A = V.linearPart(op);
  const direct = sgnDet(A) >= 0;
  const M = (dimension % 2 == 1 && !direct) ? V.negative(A) : A;
  const t = V.shiftPart(op);
  const order = matrixOrder(M, 6);

  let clockwise = true;

  if (dimension == 2) {
    if (!direct)
      clockwise = false;
    else if (order == 0 || order > 2) {
      const v = [1, 0];
      clockwise = sgnDet([v, V.times(M, v)]) >= 0;
    }
  }
  else if (dimension == 3) {
    if (order == 0 || order > 2) {
      const a = operatorAxis(M);
      if (a) {
        const v = vectorsCollinear([1, 0, 0], a) ? [0, 1, 0] : [1, 0, 0];
        clockwise = sgnDet([a, v, V.times(M, v)]) >= 0;
      }
    }
  }

  return { dimension, direct, order, clockwise };
};


const crystalSystemAndBasis2d = ops => {
  const opsWithTypes = ops.map(op => Object.assign(operatorType(op), { op }));
  const mirrors = opsWithTypes.filter(op => !op.direct);

  const { order: n, op: R } = opsWithTypes
        .filter(op => op.direct && op.clockwise)
        .reduce((op1, op2) => op2.order > op1.order ? op2 : op1);

  let crystalSystem;

  if (n == 6)
    crystalSystem = CS_2D_HEXAGONAL;
  else if (n == 4)
    crystalSystem = CS_2D_SQUARE;
  else if (n == 3)
    crystalSystem = CS_2D_HEXAGONAL;
  else if (mirrors.length)
    crystalSystem = CS_2D_RECTANGULAR;
  else
    crystalSystem = CS_2D_OBLIQUE;

  const x = mirrors.length ? operatorAxis(mirrors[0].op) : [1, 0];
  let y;

  if (n >= 3)
    y = n == 6 ? V.times(R, V.times(R, x)) : V.times(R, x);
  else if (mirrors.length > 1)
    y = operatorAxis(mirrors[1].op);
  else {
    const t = x[0] == 0 ? [1, 0] : [0, 1];
    y = mirrors.length ? V.minus(t, V.times(mirrors[0].op, t)) : t;
  }

  const basis = sgnDet([x, y]) < 0 ? [x, V.negative(y)] : [x, y];

  return { crystalSystem, basis };
};


const isIn = (val, expected) =>
  expected.constructor == Array ? expected.indexOf(val) >= 0 : val == expected;


const crystalSystemAndBasis3d = ops => {
  const opsWithTypes = ops.map(op => Object.assign(operatorType(op), { op }));

  const ofType = (order, direct, clockwise) => opsWithTypes.filter(
    op => isIn(op.order, order)
      && isIn(op.direct, direct)
      && isIn(op.clockwise, clockwise));

  const mirrors    = ofType([2, 3, 4, 6], false, true);
  const inversions = ofType(1, false, true);
  const directGood = inversions.length ? true : [true, false];

  const twoFold    = ofType(2, directGood, true);
  const threeFold  = ofType(3, true, true);
  const fourFold   = ofType(4, directGood, true);
  const sixFold    = ofType(6, directGood, true);

  let crystalSystem, x, y, z, R;

  if (sixFold.length > 0) {
    const A = sixFold[0].op;
    crystalSystem = CS_3D_HEXAGONAL;
    z = operatorAxis(A);
    R = V.times(A, A);
  }
  else if (fourFold.length > 1) {
    crystalSystem = CS_3D_CUBIC;
    z = operatorAxis(fourFold[0].op);
    R = threeFold[0].op;
    x = V.times(R, z);
    y = V.times(R, x);
  }
  else if (fourFold.length > 0) {
    crystalSystem = CS_3D_TETRAGONAL;
    R = fourFold[0].op;
    z = operatorAxis(R);
  }
  else if (threeFold.length > 1) {
    crystalSystem = CS_3D_CUBIC;
    z = operatorAxis(twoFold[0].op);
    R = threeFold[0].op;
    x = V.times(R, z);
    y = V.times(R, x);
  }
  else if (threeFold.length > 0) {
    crystalSystem = CS_3D_TRIGONAL;
    R = threeFold[0].op;
    z = operatorAxis(R);
  }
  else if (twoFold.length > 1) {
    crystalSystem = CS_3D_ORTHORHOMBIC;
    x = operatorAxis(twoFold[0].op);
    y = operatorAxis(twoFold[1].op);
    z = operatorAxis(twoFold[2].op);
  }
  else if (twoFold.length > 0) {
    crystalSystem = CS_3D_MONOCLINIC;
    z = operatorAxis(twoFold[0].op);
  }
  else {
    crystalSystem = CS_3D_TRICLINIC;
    z = [0, 0, 1];
  }

  if (x == null) {
    for (const { op } of twoFold) {
      const t = operatorAxis(op);
      if (!vectorsCollinear(z, t)) {
        x = t;
        break;
      }
    }
  }

  if (x == null) {
    x = vectorsCollinear(z, [1, 0, 0]) ? [0, 1, 0] : [1, 0, 0];
    if (mirrors.length > 0)
      x = V.plus(x, V.times(mirrors[0].op, x));
    else if (twoFold.length > 0)
      x = V.minus(x, V.times(twoFold[0].op, x));
    else if (crystalSystem == CS_3D_TRIGONAL)
      x = V.minus(x, V.times(R, x));
  }

  if (y == null) {
    if (R != null)
      y = V.times(R, x);
    else {
      y = V.crossProduct(z, x);
      if (mirrors.length > 0)
        y = V.plus(y, V.times(mirrors[0].op, y));
      else if (twoFold.length > 0)
        y = V.minus(y, V.times(twoFold[0].op, y));
    }
  }

  const basis = sgnDet([x, y, z]) < 0 ? [x, y, V.negative(z)] : [x, y, z];

  return { crystalSystem, basis };
};


const crystalSystemAndBasis = ops => {
  const dim = V.dimension(ops[0] || []);
  const primitive = sg.primitiveSetting(ops);
  const primToStd = V.inverse(primitive.fromStd);
  const primOps = primitive.ops.map(op => V.times(primToStd, op));

  if (dim == 3)
    return crystalSystemAndBasis3d(primOps);
  else if (dim == 2)
    return crystalSystemAndBasis2d(primOps);
  else if (dim == 1)
    return { crystalSystem: CS_1D };
  else if (dim == 0)
    return { crystalSystem: CS_0D };
};


const basisNormalizer = {};


basisNormalizer[CS_0D] =
basisNormalizer[CS_1D] =
basisNormalizer[CS_2D_OBLIQUE] = b => ({ basis: b, centering: 'p' });


basisNormalizer[CS_2D_RECTANGULAR] = b => {
  if (V.ne(0, b[0][0]) && V.ne(0, b[0][1]))
    return {
      basis: [ V.times(operator("0, 2y"), b[0]),
               V.times(operator("2x, 0"), b[0]) ],
      centering: 'c'
    };
  else if (V.ne(0, b[1][0]) && V.ne(0, b[1][1]))
    return {
      basis: [ V.times(operator("0, 2y"), b[1]),
               V.times(operator("2x, 0"), b[1]) ],
      centering: 'c'
    };
  else if (V.eq(0, b[0][1]))
    return { basis: [ b[1], V.negative(b[0]) ], centering: 'p' };
  else
    return { basis: [ b[0], b[1] ], centering: 'p' };
};


basisNormalizer[CS_2D_SQUARE] = b => ({
  basis: [ b[0], V.times(operator("-y, x"), b[0]) ],
  centering: 'p'
});


basisNormalizer[CS_2D_HEXAGONAL] = b => ({
  basis: [ b[0], V.times(operator("-y, x-y"), b[0]) ],
  centering: 'p'
});


basisNormalizer[CS_3D_CUBIC] = b => {
  const r = V.abs(b[0].find(x => V.ne(0, x)));
  const n = b[0].filter(x => V.ne(0, x)).length;

  const [a, c] = (n == 1) ?
    [r, 'P'] :
    [V.times(r, 2), (n == 2) ? 'F' : 'I'];

  return { basis: [[a, 0, 0], [0, a, 0], [0, 0, a]], centering: c };
};


basisNormalizer[CS_3D_HEXAGONAL] = b => {
  const [u, w] = vectorsCollinear([0, 0, 1], b[0]) ?
    [b[2], b[0]] : vectorsCollinear([0, 0, 1], b[1]) ?
    [b[0], b[1]] :
    [b[0], b[2]];

  const v = V.times(operator("-y, x-y, z"), u);

  return { basis: [u, v, w], centering: 'P' };
};


basisNormalizer[CS_3D_TRIGONAL] = b => {
  const basis = vectorsCollinear([0, 0, 1], b[0]) ?
    [b[1], b[2], b[0]] : vectorsCollinear([0, 0, 1], b[1]) ?
    [b[0], b[2], b[1]] :
    [b[0], b[1], b[2]];

  const r =
    basis.find(v => !vectorsCollinear([0, 0, 1], v) && V.ne(0, v[2]));

  if (r) {
    if (V.lt(r[2], 0)) {
      basis[0] = V.times(operator("2x-y,x+y, 0"), r);
      basis[2] = V.times(operator("0, 0, -3z"), r);
    }
    else {
      basis[0] = V.times(operator("x+y, 2y-x, 0"), r);
      basis[2] = V.times(operator("0, 0, 3z"), r);
    }
  }

  basis[1] = V.times(operator("-y, x-y, z"), basis[0]);

  return { basis, centering: r ? 'R' : 'P' };
};


basisNormalizer[CS_3D_TETRAGONAL] = b => {
  const basis = [b[0], b[1], b[2]];
  let centering = 'P';

  if (vectorsCollinear([0, 0, 1], basis[0])) {
    [basis[0], basis[2]] = [basis[1], basis[0]];
    if (!vectorsOrthogonal([0, 0, 1], basis[0])) {
      centering = 'I';
      basis[0] = V.times(operator("x-y, x+y, 0"), basis[0]);
    } 
  }
  else if (vectorsOrthogonal([0, 0, 1], basis[0])) {
    if (!vectorsOrthogonal([0, 0, 1], basis[1]))
      basis[2] = basis[1];

    if (!vectorsCollinear([0, 0, 1], basis[2])) {
      centering = 'I';
      basis[2] = V.times(operator("0, 0, 2z"), basis[2]);
    }
  }
  else {
    centering = 'I';
    basis[2] = V.times(operator("0, 0, 2z"), basis[0]);
    basis[0] = V.times(operator("x-y, x+y, 0"), basis[0]);
  }

  basis[1] = V.times(operator("-y, x, z"), basis[0]);

  return { basis, centering };
};


basisNormalizer[CS_3D_ORTHORHOMBIC] = basis => {
  let d = basis.map(v => v.filter(x => V.ne(0, x)).length);
  const x = [1, 0, 0];
  const y = [0, 1, 0];
  const z = [0, 0, 1];
  const copy = [basis[0], basis[1], basis[2]];
  const left = [basis[1], basis[2], basis[0]];
  const right = [basis[2], basis[0], basis[1]];

  let v;
  if (d[0] == 3)
    v = copy;
  else if (d[1] == 3)
    v = left;
  else if (d[2] == 3)
    v = right;
  else if (d[0] == 2 && vectorsOrthogonal(z, basis[0]))
    v = copy;
  else if (d[1] == 2 && vectorsOrthogonal(z, basis[1]))
    v = left;
  else if (d[2] == 2 && vectorsOrthogonal(z, basis[2]))
    v = right;
  else if (d[0] == 2 && vectorsOrthogonal(y, basis[0]))
    v = copy;
  else if (d[1] == 2 && vectorsOrthogonal(y, basis[1]))
    v = left;
  else if (d[2] == 2 && vectorsOrthogonal(y, basis[2]))
    v = right;
  else if (vectorsCollinear(x, basis[0]))
    v = copy;
  else if (vectorsCollinear(x, basis[1]))
    v = left;
  else if (vectorsCollinear(x, basis[2]))
    v = right;
  else
    v = copy;

  const n = v[0].filter(x => V.ne(0, x)).length;
  d = v.map(v => v.filter(x => V.ne(0, x)).length);

  let a, b, c, centering;
  if (n == 3) {
    [a, b, c] = V.times(2, v[0]);
    centering = 'I';
  }
  else if (n == 2) {
    const p = v[0].findIndex(x => V.eq(0, x));
    const v1p = V.abs(v[1][p]);
    const v2p = V.abs(v[2][p]);

    let m;
    if (V.eq(0, v2p) || (V.ne(0, v1p) && V.gt(v2p, v1p))) {
      [v[1], v[2]] = [v[2], v[1]];
      m = d[1];
    }
    else
      m = d[2];

    if (p == 1) {
      a = V.times(v[0][0], 2);
      b = V.times(v[2][1], m);
      c = V.times(v[0][2], 2);
      centering = m == 2 ? 'F' : 'B';
    }
    else if (p == 2) {
      a = V.times(v[0][0], 2);
      b = V.times(v[0][1], 2);
      c = V.times(v[2][2], m);
      centering = m == 2 ? 'F' : 'C';
    }
    else
      throw new RuntimeError('this should not happen');
  }
  else {
    if (!vectorsCollinear(x, v[0]))
      throw new RuntimeError('this should not happen');

    const v11 = V.abs(v[1][1]);
    const v21 = V.abs(v[2][1]);

    let m;
    if (V.eq(0, v11) || (V.ne(0, v21) && V.gt(v11, v21))) {
      [v[1], v[2]] = [v[2], v[1]];
      m = d[2];
    }
    else
      m = d[1];

    a = v[0][0];
    if (m == 2) {
      [b, c] = V.times(v[1], 2).slice(1);
      centering = 'A';
    }
    else {
      if (V.ne(0, v[1][1])) {
        b = v[1][1];
        c = v[2][2];
      }
      else {
        b = v[2][1];
        c = v[1][2];
      }
      centering = 'P';
    }
  }

  if (centering == 'A')
    return { basis: [[0, b, 0], [0, 0, c], [a, 0, 0]], centering: 'C' };
  else if (centering == 'B')
    return { basis: [[0, 0, c], [a, 0, 0], [0, b, 0]], centering: 'C' };
  else
    return { basis: [[a, 0, 0], [0, b, 0], [0, 0, c]], centering };
};


basisNormalizer[CS_3D_MONOCLINIC] = b => {
  const z = [0, 0, 1];
  let centering, v;

  if (vectorsCollinear(z, b[0]))
    v = [b[1], b[2], b[0]];
  else if (vectorsCollinear(z, b[1]))
    v = [b[0], V.times(-1, b[2]), b[1]];
  else
    v = [b[0], b[1], b[2]];

  if (vectorsOrthogonal(z, v[1]))
    v = [V.times(-1, v[1]), v[0], v[2]];
  else if (vectorsOrthogonal(z, v[2]))
    v = [v[2], v[0], v[1]];

  if (!vectorsOrthogonal(z, v[0]))
    v[0] = V.times(operator("x,y,0"), V.plus(v[0], v[1]));

  if (!vectorsCollinear(z, v[2])) {
    if (vectorsOrthogonal(z, v[1])) {
      if (vectorsCollinear(v[0], V.times(operator("2x,2y,0"), v[2])))
        v[0] = v[1];

      v[1] = v[2];
    }
    v[2] = V.times(operator("0,0,2z"), v[2]);
  }

  if (!vectorsOrthogonal(z, v[1])) {
    v[1] = V.times(operator("2x,2y,0"), v[1]);
    centering = 'A';
  }
  else
    centering = 'P';

  return { basis: v, centering };
};


basisNormalizer[CS_3D_TRICLINIC] = b => ({ basis: b, centering: 'P' });


const normalizedBasis = (crystalSystem, basisIn) => {
  const reduced = reducedLatticeBasis(basisIn);
  const { basis, centering } = basisNormalizer[crystalSystem](reduced);

  if (sgnDet(basis) < 0)
    basis[basis.length - 1] = V.negative(basis[basis.length - 1]);

  return { normalized: basis, centering };
};


const variations = (crystalSystem, centering) => {
  const change = s => V.coordinateChange(operator(s));

  if (crystalSystem == CS_3D_MONOCLINIC) {
    if (centering == 'A')
      return [ "x,y,z", "-x,y-x,-z" ].map(change);
    else
      return [ "x,y,z", "-y,x-y,z", "y-x,-x,z" ].map(change);
  }
  else if (crystalSystem == CS_3D_ORTHORHOMBIC) {
    if (centering == 'C')
      return [ "x,y,z", "y,x,-z" ].map(change);
    else
      return [
        "x,y,z", "z,x,y", "y,z,x", "y,x,-z", "x,z,-y", "z,y,-x"
      ].map(change);
  }
  else if (crystalSystem == CS_3D_TRIGONAL) {
    if (centering == 'P')
      return [ "x,y,z", "x-y,x,z" ].map(change);
    else
      return [ "x,y,z" ].map(change);
  }
  else if (crystalSystem == CS_3D_CUBIC)
    return [ "x,y,z", "-y,x,z" ].map(change);
  else if (crystalSystem == CS_3D_HEXAGONAL ||
           crystalSystem == CS_3D_TETRAGONAL ||
           crystalSystem == CS_3D_TRICLINIC)
    return [ "x,y,z" ].map(change);
  else if (crystalSystem == CS_2D_RECTANGULAR)
    return [ "x,y", "y,-x" ].map(change);
  else
    return [ "x,y" ].map(change);
};


const solveModuloZ = (lft, rgt) => {
  const [rowsLft, colsLft] = V.shape(lft);
  const [rowsRgt, colsRgt] = V.shape(rgt);
  if (rowsLft != rowsRgt)
    throw new Error('left and right side must have equal number of rows');

  [lft, rgt] = reducedBasis(lft, rgt);

  if (lft == null)
    return V.matrix(colsLft, colsRgt);
  else if (V.rank(lft) < lft.length) {
    const n = V.rank(lft);

    if (rgt.slice(n).some(v => v.some(x => !V.isInteger(x))))
      return null;
    else
      [lft, rgt] = [lft.slice(0, n), rgt.slice(0, n)];
  }

  const [n, m] = V.shape(lft);
  const [B, U] = reducedBasis(V.transposed(lft), V.identityMatrix(m))
        .map(t => V.transposed(t));

  const y = [];
  for (const i in rgt) {
    const d = B[i][i];
    const v = V.minus(rgt[i], V.times(B[i].slice(0, i), y));

    if (V.eq(d, 0)) {
      if (v.some(x => !V.isInteger(x)))
        return null;
      else
        y.push(v.map(x => 0));
    }
    else
      y.push(v.map(x => V.div(x, d)));
  }

  return V.times(U, y.concat(V.matrix(m - n, y[0].length)));
};


const matchingOriginShift = (imgOps, srcOps) => {
  const linearParts = srcOps.map(op => V.linearPart(op));

  if (linearParts.every((m, i) => V.eq(m, V.linearPart(imgOps[i])))) {
    const I = V.identityMatrix(V.dimension(imgOps[0]));
    const As = [], bs = [];
    for (let i = 0; i < srcOps.length; ++i) {
      As.push(V.minus(linearParts[i], I));
      bs.push(V.transposed(V.minus(V.shiftPart(srcOps[i]),
                                   V.shiftPart(imgOps[i]))));
    }

    const s = solveModuloZ([].concat(...As), [].concat(...bs));

    if (s)
      return V.coordinateChange(V.shift(V.transposed(s)[0]));
  }
};


const primitiveOps = ops => {
  const primitive = sg.primitiveSetting(ops);
  return primitive.ops.map(op => V.times(V.inverse(primitive.fromStd), op));
};


const transformedAndSorted = (ops, transform) =>
      ops.map(op => V.times(transform, op)).sort((a, b) => V.cmp(a, b));


const matchOperators = (ops, toPrimitive, crystalSystem, centering) => {
  const system = mappedCrystalSystem[crystalSystem];

  for (const { name, fromStd } of sgtable.lookupSettings(system, centering)) {
    const stdToPrimitive = V.times(toPrimitive, fromStd);
    const { operators } = sgtable.settingByName(name);
    const opsToMatch =
          transformedAndSorted(primitiveOps(operators), stdToPrimitive);

    if (opsToMatch.length == ops.length) {
      for (const M of variations(crystalSystem, centering)) {
        const probes = transformedAndSorted(ops, V.times(toPrimitive, M));
        const shift = matchingOriginShift(opsToMatch, probes);

        if (shift) {
          const toStdRaw = [V.inverse(stdToPrimitive), shift, toPrimitive, M]
                .reduce((a, b) => V.times(a, b));
          const toStd = V.coordinateChange(sg.opModZ(toStdRaw.oldToNew));

          return { name, toStd };
        }
      }
    }
  }
};


const changeToBasis = basis =>
      V.coordinateChange(V.inverse(V.transposed(basis)));


export const identifySpacegroup = ops => {
  const dim = V.dimension(ops[0] || []);

  if (dim == 0) {
    return {
      dimension: 0,
      crystalSystem: CS_0D
    };
  }
  else if (dim == 1) {
    const opsWithTypes = ops.map(op => Object.assign(operatorType(op), { op }));
    const mirrors = opsWithTypes.filter(op => !op.direct);
    const name = mirrors.length ? 'opm' : 'op1';

    return {
      dimension: 1,
      crystalSystem: CS_1D,
      fullName: name,
      groupName: name,
      toStd: V.identityMatrix(1)
    };
  }
  else if (dim > 3) {
    throw new Error("only implemented for dimensions up to 3");
  }
  else {
    const { crystalSystem, basis } = crystalSystemAndBasis(ops);
    const pCell = V.times(sg.primitiveSetting(ops).cell, V.inverse(basis));
    const { normalized, centering } = normalizedBasis(crystalSystem, pCell);
    const toNormalized = changeToBasis(V.times(normalized, basis));

    const match = matchOperators(
      transformedAndSorted(primitiveOps(ops), toNormalized),
      changeToBasis(V.times(pCell, V.inverse(normalized))),
      crystalSystem,
      centering);

    if (match) {
      const [groupName, extension] = match.name.split(':');

      return {
        dimension: dim,
        crystalSystem,
        centering,
        fullName: match.name,
        groupName,
        extension,
        toStd: V.times(match.toStd, toNormalized)
      }
    }
  }
};


const checkTestResult = ({ operators: ops, transform }, { toStd }) => {
  const expected = ops.map(op => sg.opModZ(V.times(transform, op))).sort();
  const seen = ops.map(op => sg.opModZ(V.times(toStd, op))).sort();

  if (expected.some((_, i) => V.ne(expected[i], seen[i]))) {
    for (let i = 0; i < expected.length; ++i)
      console.log(`  ${expected[i]} <=> ${seen[i]}`);
  }
};


if (require.main == module) {
  Array.prototype.toString = function() {
    return '[' + this.map(x => x.toString()).join(',') + ']';
  };

  for (const entry of sgtable.allSettings()) {
    const s = `group ${entry.name} (${entry.canonicalName})`;
    const ops = entry.operators;

    try {
      if (V.dimension(entry.transform) != 2)
        continue;

      const result = identifySpacegroup(ops) || {};

      if (result.fullName != entry.canonicalName)
        console.log(`${s} >>> found ${result.fullName}`);
      else {
        console.log(`${s} OK`);
        checkTestResult(entry, result);
      }
    } catch(ex) {
      console.log(`${s} >>> ${ex.message}`);
      console.log(ex);
    }
  }
}
