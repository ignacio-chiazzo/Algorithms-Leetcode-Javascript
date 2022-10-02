const assert = require('assert');
const maxSum = require('../../LeetcodeProblems/Algorithms/Maximise_Hour_Glass_Sum').maxSum;

function test() {
  assert.equal(maxSum([[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]]));
  assert.equal(maxSum([[1,2,3],[4,5,6],[7,8,9]]));
}

module.exports.test = test
