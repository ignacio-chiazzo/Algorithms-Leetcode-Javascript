const assert = require("assert");
const lengthOfLongestSubstring = require("../../../LeetcodeProblems/Algorithms/medium/Longest_Substring").lengthOfLongestSubstring;

function test() {
  assert.equal(4, lengthOfLongestSubstring("abcdbcd"));
  assert.equal(0, lengthOfLongestSubstring(""));
  assert.equal(1, lengthOfLongestSubstring("b"));
  assert.equal(1, lengthOfLongestSubstring("bb"));
  assert.equal(3, lengthOfLongestSubstring("bbacb"));
}

module.exports.test = test;
