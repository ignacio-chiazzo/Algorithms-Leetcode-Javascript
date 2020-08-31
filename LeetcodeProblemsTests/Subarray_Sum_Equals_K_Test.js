const assert = require('assert');

var test  = function() {
  assert.strictEqual(subarraySum([1,1,1], 2), 2);
  assert.strictEqual(subarraySum([1], 0), 0);
  assert.strictEqual(subarraySum([0], 0), 1);
  assert.strictEqual(subarraySum([0,0,0,0,0], 0), 15);
}

module.exports.test = test;
