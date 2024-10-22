const assert = require("assert");
const bitReverseToMakeNumberEqual = require("../../../LeetcodeProblems/Algorithms/hard/First_Missing_Positive").firstMissingPositive;

function test() {
  assert.deepEqual(
    firstMissingPositive([1,2,0]),
   3
  );
  assert.deepEqual(
    firstMissingPositive([3,4,-1,1]),
    2
  );
  assert.deepEqual(
  firstMissingPositive([7,8,9,11,12]),
  1
);
}

module.exports.test = test;