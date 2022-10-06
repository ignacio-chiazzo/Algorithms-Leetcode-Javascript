const assert = require('assert');
const reverseInteger = require('../../LeetcodeProblems/Algorithms/Reverse_Integer').reverseInteger;

var test = function() {
  assert.equal(reverseInteger(123), 321);
  assert.equal(reverseInteger(-123), -321);
  assert.equal(reverseInteger(120), 21);
}


module.exports.test = test;
