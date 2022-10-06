const assert = require('assert');
const nextPermutation = require('../../LeetcodeProblems/Algorithms/Next_Permutation').nextPermutation;

function test() {
  let test1 = [1,2,3];
  let test2 = [3,2,1];
  let test3 = [1,1,5];
  nextPermutation(test1);
  nextPermutation(test2);
  nextPermutation(test3);
  assert.deepEqual(test1, [1,3,2]);
  assert.deepEqual(test2, [1,2,3]);
  assert.deepEqual(test3, [1,5,1]);
}

module.exports.test = test;
