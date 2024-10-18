const assert = require("assert");
const bitReverseToMakeNumberEqual = require("../../../LeetcodeProblems/Algorithms/easy/Lexographic_smallest_after_swap").getSmallestString;


function test() {
  assert.deepEqual(
    getSmallestString("45320"),
    "43520"
  );
  assert.deepEqual(
    getSmallestString("001"),
    "001"
  );
);
}

module.exports.test = test;
