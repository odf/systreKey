import * as base from './base';
import * as mats from './matrices';
import * as linalg from './linearAlgebra';
import * as ints from './integers';
import * as fracs from './fractions';


export const integers =
  ints.extend(base.arithmetic());

export const rationals =
  fracs.extend(integers, ['Integer', 'LongInt'], 'Fraction');

export const rationalMatrices =
  mats.extend(rationals, ['Integer', 'LongInt', 'Fraction']);

export const rationalLinearAlgebra =
  linalg.extend(rationalMatrices, true);

export const rationalLinearAlgebraModular =
  linalg.extend(rationalMatrices, false);
