const assert = require("assert");
const binaryGap = require("../../../LeetcodeProblems/Algorithms/easy/Binary_Gap").binaryGap;

function test() {
  assert.equal(binaryGap(22), 2); // 10110
  assert.equal(binaryGap(8), 0); // 1000
}

module.exports.test = test;
