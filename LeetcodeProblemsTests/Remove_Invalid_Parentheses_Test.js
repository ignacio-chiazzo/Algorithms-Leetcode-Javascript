const assert = require('assert');

var test = function() {
  assert.equal(removeInvalidParentheses("))))(()"), "()");
  assert.equal(removeInvalidParentheses("(()"), "()");
  assert.equal(removeInvalidParentheses("(d))()"), "(d)()");
  assert.equal(removeInvalidParentheses("(())"), "(())");
}

module.exports.test = test;
