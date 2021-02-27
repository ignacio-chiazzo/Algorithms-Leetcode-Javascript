const assert = require('assert');
const permute = require('../../LeetcodeProblems/Algorithms/Permutations').permute;

function test() {
  assert.deepEqual(permute([]), [ [] ]);
  assert.deepEqual(permute([1]), [ [ 1 ] ]);
  assert.deepEqual(
    permute([1,2,3]), 
    [
      [ 1, 2, 3 ],
      [ 1, 3, 2 ],
      [ 2, 1, 3 ],
      [ 2, 3, 1 ],
      [ 3, 1, 2 ],
      [ 3, 2, 1 ]
    ]
  );
}

module.exports.test = test;
