const assert = require('assert');

var test = function() {
  assert.strictEqual(uniquePaths1(10,4), 220);
  assert.strictEqual(uniquePaths1(3,2), 3);
}

module.exports.test = test;
