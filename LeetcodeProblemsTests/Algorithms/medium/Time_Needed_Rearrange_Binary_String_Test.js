const assert = require("assert");
const secondsToRemoveOccurrences = require("../../../LeetcodeProblems/Algorithms/medium/Time_Needed_Rearrange_Binary_String").secondsToRemoveOccurrences;

function test() {
  assert.equal(secondsToRemoveOccurrences("0110101"), 4);
  assert.equal(secondsToRemoveOccurrences("11100"), 0);
}

module.exports.test = test;
