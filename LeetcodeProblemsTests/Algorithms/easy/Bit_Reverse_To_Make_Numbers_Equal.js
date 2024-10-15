const assert = require("assert");
const bitReverseToMakeNumberEqual = require("../../../LeetcodeProblems/Algorithms/easy/Bit_Reverse_To_Make_Numbers_Equal").bitChanges;


function test() {
  assert.deepEqual(
    bitChanges(13, 4),
    2
  );
  assert.deepEqual(
    bitChanges(21, 21),
    0
  );
  assert.deepEqual(
  bitChanges(14, 13),
  -1
);
}

module.exports.test = test;
