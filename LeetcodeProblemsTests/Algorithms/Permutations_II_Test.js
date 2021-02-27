const assert = require('assert');
const permuteUnique = require('../../LeetcodeProblems/Algorithms/Permutations_II').permuteUnique;

function test() {
  assert.deepEqual(
    permuteUnique([1,1,2]),
    [ [ '1', '1', '2' ], [ '1', '2', '1' ], [ '2', '1', '1' ] ]
  );
  assert.deepEqual(
    permuteUnique([1,3,2,1]),
    [
      [ '1', '1', '2', '3' ],
      [ '1', '1', '3', '2' ],
      [ '1', '2', '1', '3' ],
      [ '1', '2', '3', '1' ],
      [ '1', '3', '1', '2' ],
      [ '1', '3', '2', '1' ],
      [ '2', '1', '1', '3' ],
      [ '2', '1', '3', '1' ],
      [ '2', '3', '1', '1' ],
      [ '3', '1', '1', '2' ],
      [ '3', '1', '2', '1' ],
      [ '3', '2', '1', '1' ]
    ]
  );
  assert.deepEqual(permuteUnique([]), [ [] ]);
  assert.deepEqual(permuteUnique([1,1]), [ [ '1', '1' ] ]);
}

module.exports.test = test;
