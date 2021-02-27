const assert = require('assert');
const longestConsecutive = require('../../LeetcodeProblems/Algorithms/Longest_Consecutive_Sequence').longestConsecutive;

function test() {
  assert.equal(longestConsecutive([100, 1, 200, 3, 2, 400, 201]), 3);
  assert.equal(longestConsecutive([1,2,3,4, 100, 1, 200, 3, 2, 400, 201]), 4);
  assert.equal(longestConsecutive([1, 400, 201, 403, 398]), 1);
  assert.equal(longestConsecutive([]), 0);
  assert.equal(longestConsecutive([2]), 1);
}

module.exports.test = test;
