const assert = require("assert");
const longestOnes = require("../../LeetcodeProblems/Algorithms/Max_Consecutive_Ones_III").longestOnes;

function test() {
  assert.equal(1, longestOnes([1], 1));
  assert.equal(1, longestOnes([0], 1));
  assert.equal(0, longestOnes([0], 0));
  assert.equal(6, longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));
  assert.equal(10, longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));
}

module.exports.test = test;
