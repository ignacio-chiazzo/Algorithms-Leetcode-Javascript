const assert = require('assert');
const threeSum = require('../../LeetcodeProblems/Algorithms/3Sum').threeSum;

var test = function () {
  assert.deepEqual(threeSum([]), []);
  assert.deepEqual(threeSum([0]), []);
  assert.deepEqual(threeSum([0, 0]), []);
  assert.deepEqual(
    threeSum([0, 0, 0]), 
    [[0, 0, 0]]
  );
  assert.deepEqual(
    threeSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 
    [[0, 0, 0]]
  );
  assert.deepEqual(
    threeSum([-1, 0, 1, 2, -1, -4]), 
    [ [ -1, 2, -1 ], [ 0, 1, -1 ] ]
  );
}

module.exports.test = test;
