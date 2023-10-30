const assert = require("assert");
const findSubarrays = require("../../../LeetcodeProblems/Algorithms/medium/Find_Subarrays_With_Equal_Sum").findSubarrays;

var test = function () {
  assert.equal(findSubarrays([4,2,4]), true);
  assert.equal(findSubarrays([1,2,3,4,5]), false);
  assert.equal(findSubarrays([0,0,0]), true);
};

module.exports.test = test;
