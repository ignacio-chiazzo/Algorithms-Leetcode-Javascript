const assert = require('assert');
const secondsToRemoveOccurrences = require('../../LeetcodeProblems/Algorithms/Time_Needed_Rearrange_Binary_String').secondsToRemoveOccurrences;

function test() {
  assert.equal(secondsToRemoveOccurrences("0110101"));
  assert.equal(secondsToRemoveOccurrences("11100"))
};

module.exports.test = test
