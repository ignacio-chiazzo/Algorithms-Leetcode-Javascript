const assert = require('assert');
const reverseStr = require('../../LeetcodeProblems/Algorithms/Reverse_String_II').reverseStr;

var test = function() {
  assert.equal(reverseStr("abcdefg", 2), "bacdfeg");
  assert.equal(reverseStr("abcdefg", 3), "cbadefg");
  assert.equal(reverseStr("abcdefg", 1), "abcdefg");
  assert.equal(reverseStr("abcdefg", 0), "abcdefg");  
}

module.exports.test = test;
