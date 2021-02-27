const assert = require('assert');
const longestPalindrome = require('../../LeetcodeProblems/Algorithms/Longest_Palindromic_Substring').longestPalindrome;

function test() {
  assert.equal(longestPalindrome("pabcdcbte"), "bcdcb");
  assert.equal(longestPalindrome("bb"), "bb");
  assert.equal(longestPalindrome(""), "");
  assert.equal(longestPalindrome("bbb"), "bbb");
  assert.equal(longestPalindrome("bbbb"), "bbbb");
  assert.equal(longestPalindrome("ptabbbbat"), "tabbbbat");
}

module.exports.test = test;
