const assert = require("assert");
const checkInclusion = require("../../../LeetcodeProblems/Algorithms/medium/Permutations_In_String").checkInclusion;

function test() {
  assert.equal(false, checkInclusion("abc", "ab"));
  assert.equal(false, checkInclusion("aa", "aba"));
  assert.equal(true, checkInclusion("ab", "eidbaooo"));
  assert.equal(false, checkInclusion("ab", "eidboaoo"));
}
test();

module.exports.test = test;
