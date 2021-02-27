const assert = require('assert');
var minDistance = require('../../LeetcodeProblems/Algorithms/Edit_Distance').minDistance;
var minDistance2 = require('../../LeetcodeProblems/Algorithms/Edit_Distance').minDistance2;

function test() {
  assert.equal(minDistance("ros", "horse"), 3);
  assert.equal(minDistance("intention", "execution"), 5);

  assert.equal(minDistance2("ros", "horse"), 3);
  assert.equal(minDistance2("intention", "execution"), 5);
}

module.exports.test = test;
