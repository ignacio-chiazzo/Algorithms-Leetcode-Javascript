
const assert = require("assert");
var findAnagrams = require("../../LeetcodeProblems/Algorithms/Find_Anagrams").findAnagrams;

function test() {
  assert.deepEqual([], findAnagrams("AA", "BB"));
  assert.deepEqual([0,1,2,3], findAnagrams("AAAA", "A"));
  assert.deepEqual([0,1,2], findAnagrams("abab", "ab"));
  assert.deepEqual([0,6], findAnagrams("cbaebabacd", "abc"));
}

module.exports.test = test;
