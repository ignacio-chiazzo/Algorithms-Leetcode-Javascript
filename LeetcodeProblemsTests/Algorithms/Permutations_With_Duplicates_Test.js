const assert = require('assert');
const subsetWithoutDuplicates = require('../../LeetcodeProblems/Algorithms/Permutations_With_Duplicates').subsetWithoutDuplicates;

var test = function() {
  assert.deepEqual(
    subsetWithoutDuplicates([1,1,2,3]),
    [
      [ 1, 1, 2, 3 ],
      [ 1, 1, 3, 2 ],
      [ 1, 2, 1, 3 ],
      [ 1, 2, 3, 1 ],
      [ 1, 3, 1, 2 ],
      [ 1, 3, 2, 1 ],
      [ 2, 1, 1, 3 ],
      [ 2, 1, 3, 1 ],
      [ 2, 3, 1, 1 ],
      [ 3, 1, 1, 2 ],
      [ 3, 1, 2, 1 ],
      [ 3, 2, 1, 1 ]
    ]
  );
}

module.exports.test = test;
