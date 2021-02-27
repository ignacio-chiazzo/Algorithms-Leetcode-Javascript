const assert = require('assert');
const isMatch = require('../../LeetcodeProblems/Algorithms/Regular_Expression_Matching').isMatch;

var test = function() {
  assert.equal(isMatch("aa", "a"), false);
  assert.equal(isMatch("aa", "a*"), true);
  assert.equal(isMatch("a","ab*"), true);
  assert.equal(isMatch("ab", ".*"), true);
  assert.equal(isMatch("aab", "c*a*b"), true);
  assert.equal(isMatch("mississippi", "mis*is*p*."), false);
}

module.exports.test = test;
