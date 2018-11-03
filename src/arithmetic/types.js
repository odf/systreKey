const base = require('./base');
const mats = require('./matrices');
const linalg = require('./linearAlgebra');


export const integers = require('./integers')
  .extend(base.arithmetic());

export const rationals = require('./fractions')
  .extend(integers, ['Integer', 'LongInt'], 'Fraction');

export const rationalMatrices = mats
  .extend(rationals, ['Integer', 'LongInt', 'Fraction']);

export const rationalLinearAlgebra = linalg
  .extend(rationalMatrices, true);

export const rationalLinearAlgebraModular = linalg
  .extend(rationalMatrices, false);


if (require.main == module) {
  Array.prototype.toString = function() {
    return '[ ' + this.map(x => x.toString()).join(', ') + ' ]';
  };

  const ops = rationalLinearAlgebra;

  const testGcdex = (m, n) => {
    const [x, a, b, c, d] = ops.gcdex(m, n);
    const checkX = ops.plus(ops.times(a, m), ops.times(b, n));
    const check0 = ops.plus(ops.times(c, m), ops.times(d, n));
    console.log(`gcd(${m}, ${n}) = ${x}`);
    console.log(`  ${a} * ${m} + ${b} * ${n} = ${checkX}`);
    console.log(`  ${c} * ${m} + ${d} * ${n} = ${check0}`);
    console.log();
  };

  testGcdex(5, 3);
  testGcdex(85, 51);
  testGcdex(34, 55);
  testGcdex(170, 275);
  testGcdex(550, 275);
  testGcdex(0, 275);
  testGcdex(550, 0);
  testGcdex(5, 5);
  testGcdex(5, -5);
  testGcdex(0, 0);
  testGcdex(ops.div(5, 6), ops.div(11, 9));

  const V = [1, 2, 3];
  const M = [[1, 2, 3], [4, 5, 6]];

  console.log(ops.shape(V));
  console.log(ops.negative(V));
  console.log(ops.transposed(V));
  console.log(ops.squareNorm(V));
  console.log(ops.plus(V, [3, 2, 1]));
  console.log(ops.plus(V, 2));
  console.log(ops.minus(V, [0, 1, 2]));
  console.log(ops.minus(V, 1));
  console.log(ops.minus(1, V));
  console.log(ops.idiv(V, 2));
  console.log(ops.crossProduct([1, 0, 0], [1, 2, 0]));

  console.log();
  console.log(ops.negative(M));
  console.log(ops.shape(M));
  console.log(ops.transposed(M));
  console.log(ops.squareNorm(M));
  console.log(ops.plus(M, [[9, 8, 7], [6, 5, 4]]));
  console.log(ops.plus(M, 2));
  console.log(ops.minus(M, [[0, 1, 2], [3, 4, 5]]));
  console.log(ops.minus(M, 1));
  console.log(ops.minus(1, M));

  console.log();
  console.log(ops.times(V, V));
  console.log(ops.times(M, V));
  console.log(ops.times(V, ops.transposed(M)));
  console.log(ops.times(M, ops.transposed(M)));

  const A = [[1,2,3],[0,4,5],[6,0,7]];
  console.log(ops.rank(A));
  console.log(ops.determinant(A));

  const testSolve = (A, b) => {
    const v = ops.solve(A, b);
    console.log(`${A} *\n${v} =\n${ops.times(A, v)}\n`);
  };

  console.log();
  testSolve(A, ops.transposed([1, 1, 1]));
  testSolve(A, ops.transposed([1, 1, 2]));

  const Ainv = ops.inverse(A);
  console.log(`${A} *\n${Ainv} =\n${ops.times(A, Ainv)}\n`);

  const testNullSpace = B => {
    const N = rationalLinearAlgebraModular.nullSpace(B);
    console.log(`${B} *\n${N} =\n${N ? ops.times(B, N) : N}\n`);
  }

  testNullSpace([[1,2,3], [2,4,6], [3,6,9]]);
  testNullSpace([[1,2,3,1], [4,5,6,1], [7,8,9,1]]);
  testNullSpace([[0,2,0]]);
  testNullSpace([[0,0,0,0], [0,0,0,0], [0,0,-1,0], [0,0,0,0]]);

  console.log(ops.cmp([1, 2, 3], [1, 2, 2]));
  console.log(ops.cmp([1, 2, 3], [1, 2, 3]));
  console.log(ops.cmp([1, 2, 3], [1, 2, 4]));
  console.log(ops.cmp([1, 2, 3], [1, 2, 3, 4]));
  console.log(ops.cmp([1, 2, 3], [1, 2, 3, 0]));

  console.log(ops.sgn([1, 2, 3]));
  console.log(ops.sgn([0, 2, 3]));
  console.log(ops.sgn([0, -2, 3]));
  console.log(ops.sgn([0, 0, 0]));
}
