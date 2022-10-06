
const assert = require('assert');
const longestCommonPrefix = require('../../LeetcodeProblems/Algorithms/Longest_Common_Prefix').longestCommonPrefix;

function test() {
  assert.equal(longestCommonPrefix(["flower","flow","flight"]), "fl");
  assert.equal(longestCommonPrefix(["dog","racecar","car"]), "");
  assert.equal(longestCommonPrefix([]), "");
}

module.exports.test = test;
