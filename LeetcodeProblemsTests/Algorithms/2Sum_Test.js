const assert = require("assert");
const twoSum = require("../../LeetcodeProblems/Algorithms/2Sum").twoSum;
const twoSum2 = require("../../LeetcodeProblems/Algorithms/2Sum").twoSum2;


var test = function () {
  assert.deepEqual([0,1], twoSum([2,7,11,15], 9));
  assert.deepEqual([1,2], twoSum([3,2,4], 6));
  assert.deepEqual([0,1], twoSum([3,3], 6));
  
  assert.deepEqual([0,1], twoSum2([2,7,11,15], 9));
  assert.deepEqual([1,2], twoSum2([3,2,4], 6));
  assert.deepEqual([0,1], twoSum2([3,3], 6));
};


module.exports.test = test;
