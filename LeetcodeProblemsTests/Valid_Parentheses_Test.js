const assert = require('assert');

var test = function () {
  assert.strictEqual(isValid(""), true);
  assert.strictEqual(isValid("()"), true);
  assert.strictEqual(isValid("([)]"), false);
  assert.strictEqual(isValid("{[()]}{[()]}"), true);
  assert.strictEqual(isValid("{[())()]}"), false);
}

module.exports.test = test;
