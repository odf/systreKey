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
