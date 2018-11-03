import * as JS from 'jstest';
import * as jsc from 'jsverify';
import * as spec from '../helpers';

import solve from '../../src/arithmetic/solveRational';
import { rationalMatrices } from '../../src/arithmetic/types';

const matrices = rationalMatrices;


JS.Test.describe('solveRational', function() {
  this.it('returns a solution or null', spec.property(
    [spec.generators.linearEquations(jsc.nat)],
    ([A, b]) => {
      const x = solve(A, b);
      return x == null || matrices.eq(matrices.times(A, x), b);
    },
    { tests: 1000, size: 100 }));
});


if (require.main == module) {
  JS.Test.autorun();
}
