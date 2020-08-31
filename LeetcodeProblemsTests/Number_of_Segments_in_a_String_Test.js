const assert = require('assert');

function test() {
  assert.equal(countSegments(" "), 0);
  assert.equal(countSegments("    "), 0);
  assert.equal(countSegments("ab cd ef"), 3);
  assert.equal(countSegments("  ab cd ef"), 3);
  assert.equal(countSegments("ab cd ef  "), 3);
  assert.equal(countSegments(" ab cd ef "), 3);
}

module.exports.test = test;
