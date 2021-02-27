const assert = require('assert');
const cutAwardBadges = require('../../LeetcodeProblems/Algorithms/Award_Budget_Cuts').cutAwardBadges;

function test() {
  assert.deepEqual(
    cutAwardBadges([2, 100, 50, 120, 1000], 190),
    [ 47, 47, 47, 47, 2 ]
  );
  assert.deepEqual(
    cutAwardBadges([2, 100, 50, 120, 1000], 5),
    [ 1, 1, 1, 1, 1 ]
  );
}

module.exports.test = test;
