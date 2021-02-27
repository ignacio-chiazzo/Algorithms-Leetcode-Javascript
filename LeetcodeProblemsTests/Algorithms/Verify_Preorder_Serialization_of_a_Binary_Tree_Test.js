const assert = require('assert');
const isValidSerialization = require('../../LeetcodeProblems/Algorithms/Verify_Preorder_Serialization_of_a_Binary_Tree').isValidSerialization;

var test = function() {
  assert.strictEqual(isValidSerialization(""), true);
  assert.strictEqual(isValidSerialization(""), true);
  assert.strictEqual(isValidSerialization("#"), true);
  assert.strictEqual(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"), true);
  assert.strictEqual(isValidSerialization("9,#,92,#,#"), true);
  assert.strictEqual(isValidSerialization("9,3,4,#,#,1,#,#,#,2,#,6,#,#"), false);
};

module.exports.test = test;
