const assert = require("assert");
const canCompleteCircuit = require("../../LeetcodeProblems/Algorithms/Gas_Station").canCompleteCircuit;

function test() {
  assert.equal(3, canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));
  assert.equal(-1, canCompleteCircuit([1,2,3,4], [2,3,4,5]));
  assert.equal(0, canCompleteCircuit([8,2,3,4], [2,3,4,5]));
}

module.exports.test = test;

