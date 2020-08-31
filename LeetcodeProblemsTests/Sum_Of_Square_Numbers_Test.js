const assert = require('assert');

var test = function() {
  assert.strictEqual(judgeSquareSum(0), true);
  assert.strictEqual(judgeSquareSum(1), true);
  assert.strictEqual(judgeSquareSum(5), true);
  assert.strictEqual(judgeSquareSum(16), true);
  assert.strictEqual(judgeSquareSum(24), false);
  assert.strictEqual(judgeSquareSum(25), true);
}

module.exports.test = test;
