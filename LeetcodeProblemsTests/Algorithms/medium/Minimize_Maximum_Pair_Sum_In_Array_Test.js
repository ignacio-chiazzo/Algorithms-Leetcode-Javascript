const assert = require("assert");
const minPairSum = require("../../../LeetcodeProblems/Algorithms/medium/Minimize_Maximum_Pair_Sum_In_Array").minPairSum;

var test = function () {
  assert.equal(minPairSum([3,5,2,3]), 7);
  assert.equal(minPairSum([3,5,4,2,4,6]), 8);
  assert.equal(minPairSum([1,1,1,1]), 2);
};

module.exports.test = test;
