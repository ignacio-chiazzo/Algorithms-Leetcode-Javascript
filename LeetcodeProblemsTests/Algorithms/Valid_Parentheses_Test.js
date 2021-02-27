const assert = require('assert');
const isValid = require('../../LeetcodeProblems/Algorithms/Valid_Parentheses').isValid;

var test = function () {
  assert.strictEqual(isValid(""), true);
  assert.strictEqual(isValid("()"), true);
  assert.strictEqual(isValid("([)]"), false);
  assert.strictEqual(isValid("{[()]}{[()]}"), true);
  assert.strictEqual(isValid("{[())()]}"), false);
}

module.exports.test = test;
