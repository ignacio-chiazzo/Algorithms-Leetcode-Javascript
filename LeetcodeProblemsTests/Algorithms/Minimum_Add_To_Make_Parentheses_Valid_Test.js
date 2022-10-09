const assert = require("assert");
const minAddToMakeValid = require("../../LeetcodeProblems/Algorithms/Minimum_Add_To_Make_Parentheses_Valid").minAddToMakeValid;

var test = function() {
  assert.strictEqual(1, minAddToMakeValid("()("));
  assert.strictEqual(3, minAddToMakeValid("((("));
  assert.strictEqual(0, minAddToMakeValid("()"));
  assert.strictEqual(1, minAddToMakeValid(")"));
  assert.strictEqual(1, minAddToMakeValid("("));
  assert.strictEqual(2, minAddToMakeValid(")("));
};

module.exports.test = test;
