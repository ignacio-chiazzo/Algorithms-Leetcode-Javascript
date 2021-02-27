const assert = require('assert');
const backspaceCompare = require('../../LeetcodeProblems/Algorithms/Backspace_String_Compare').backspaceCompare;
const backspaceCompare2 = require('../../LeetcodeProblems/Algorithms/Backspace_String_Compare').backspaceCompare2;

function test() {
  assert.equal(backspaceCompare("ab#c", "ad#c"), true); // true
  assert.equal(backspaceCompare("ab##", "c#d#"), true); // true
  assert.equal(backspaceCompare("a##c", "#a#c"), true); // true
  assert.equal(backspaceCompare("a#c", "b"), false); // false

  assert.equal(backspaceCompare2("ab#c", "ad#c"), true); // true
  assert.equal(backspaceCompare2("ab##", "c#d#"), true); // true
  assert.equal(backspaceCompare2("a##c", "#a#c"), true); // true
  assert.equal(backspaceCompare2("a#c", "b"), false); // false
}
test();

module.exports.test = test;
