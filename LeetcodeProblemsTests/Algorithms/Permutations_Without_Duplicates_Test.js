const assert = require('assert');
const subsetWithoutDuplicates = require('../../LeetcodeProblems/Algorithms/Permutations_Without_Duplicates').subsetWithoutDuplicates;

var test = function() {
  assert.deepEqual(
    subsetWithoutDuplicates([1,2,3]),
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
