const assert = require('assert');
const removeInvalidParentheses = require('../LeetcodeProblems/Remove_Invalid_Parentheses').removeInvalidParentheses;

var test = function() {
  assert.equal(removeInvalidParentheses("))))(()"), "()");
  assert.equal(removeInvalidParentheses("(()"), "()");
  assert.equal(removeInvalidParentheses("(d))()"), "(d)()");
  assert.equal(removeInvalidParentheses("(())"), "(())");
}

module.exports.test = test;
