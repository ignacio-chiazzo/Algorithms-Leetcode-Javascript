const assert = require('assert');
const majorityElement = require('../../LeetcodeProblems/Algorithms/Majority_Element').majorityElement;

function test() {
  assert.equal(majorityElement([2,2,3]), 2);
  assert.equal(majorityElement([2,3,2]), 2);
  assert.equal(majorityElement([1,1,1,2,3,45,1,2,4,1,1]), 1);
}

module.exports.test = test
