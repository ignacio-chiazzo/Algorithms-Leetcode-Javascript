const assert = require('assert');
const uniquePaths1 = require('../../LeetcodeProblems/Algorithms/Unique_Paths').uniquePaths1;
const uniquePaths2 = require('../../LeetcodeProblems/Algorithms/Unique_Paths').uniquePaths2;
const uniquePaths3 = require('../../LeetcodeProblems/Algorithms/Unique_Paths').uniquePaths3;

var test = function() {
  assert.strictEqual(uniquePaths1(10,4), 220);
  assert.strictEqual(uniquePaths1(3,2), 3);

  assert.strictEqual(uniquePaths2(10,4), 220);
  assert.strictEqual(uniquePaths2(3,2), 3);

  assert.strictEqual(uniquePaths3(10,4), 220);
  assert.strictEqual(uniquePaths3(3,2), 3);
}

module.exports.test = test;
