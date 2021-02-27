const assert = require('assert');
const countSegments = require('../../LeetcodeProblems/Algorithms/Number_of_Segments_in_a_String').countSegments;

function test() {
  assert.equal(countSegments(" "), 0);
  assert.equal(countSegments("    "), 0);
  assert.equal(countSegments("ab cd ef"), 3);
  assert.equal(countSegments("  ab cd ef"), 3);
  assert.equal(countSegments("ab cd ef  "), 3);
  assert.equal(countSegments(" ab cd ef "), 3);
}

module.exports.test = test;
