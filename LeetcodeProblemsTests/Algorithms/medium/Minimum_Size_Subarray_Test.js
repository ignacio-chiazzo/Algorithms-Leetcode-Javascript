const assert = require("assert");
const minSubArrayLength = require("../../../LeetcodeProblems/Algorithms/medium/Minimum_Size_Subarray").minSubArrayLength;

function test() {
  assert.equal(0, minSubArrayLength(10, []));
  assert.equal(0, minSubArrayLength(10, [4,1,2]));
  assert.equal(2, minSubArrayLength(4, [1,1,1,1, 3, 1]));
  assert.equal(1, minSubArrayLength(11, [5, 6, 12, 3, 1]));
  assert.equal(5, minSubArrayLength(5, [1,1,1,1,1]));
  assert.equal(2, minSubArrayLength(7, [2,3,1,2,4,3]));
  assert.equal(1, minSubArrayLength(4, [1,4,4]));
  assert.equal(0, minSubArrayLength(11, [1,1,1,1,1,1,1,1]));
}

module.exports.test = test;
