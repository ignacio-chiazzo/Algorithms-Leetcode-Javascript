const assert = require('assert');
var deletionDistance = require('../../LeetcodeProblems/Algorithms/Deletion_Distance').deletionDistance;
var deletionDistance2 = require('../../LeetcodeProblems/Algorithms/Deletion_Distance').deletionDistance2;
var deletionDistanceDP = require('../../LeetcodeProblems/Algorithms/Deletion_Distance').deletionDistanceDP;

function test() {
  assert.equal(deletionDistance("dog", "frog"), 3);
  assert.equal(deletionDistance("some", "some"), 0);
  assert.equal(deletionDistance("some", "thing"), 9);
  assert.equal(deletionDistance("", ""), 0);

  assert.equal(deletionDistance2("dog", "frog"), 3);
  assert.equal(deletionDistance2("some", "some"), 0);
  assert.equal(deletionDistance2("some", "thing"), 9);
  assert.equal(deletionDistance2("", ""), 0);

  assert.equal(deletionDistanceDP("dog", "frog"), 3);
  assert.equal(deletionDistanceDP("some", "some"), 0);
  assert.equal(deletionDistanceDP("some", "thing"), 9);
  assert.equal(deletionDistanceDP("", ""), 0);
}

module.exports.test = test;
