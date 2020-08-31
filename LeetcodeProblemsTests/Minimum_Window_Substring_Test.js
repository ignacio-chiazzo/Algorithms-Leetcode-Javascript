const assert = require('assert');

function test() {
  assert.equal(minWindow("ADOBECODEBANC", "ABC"), "BANC");
  assert.equal(minWindow("caaec", "cae"), "aec");
  assert.equal(minWindow("bbacbb", "ab"), "ba");
  assert.equal(minWindow("abba", "b"), "b");
  assert.equal(minWindow("abba", "a"), "a");
  assert.equal(minWindow("abba", ""), "");
}

module.exports.test = test;
