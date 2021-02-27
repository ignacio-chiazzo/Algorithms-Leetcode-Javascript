const assert = require('assert');
const maxSubArray = require('../../LeetcodeProblems/Algorithms/Maximun_Subarray').maxSubArray;

function test() {
  assert.equal(maxSubArray([]), 0);
  assert.equal(maxSubArray([-4]), -4);
  assert.equal(maxSubArray([2]), 2);
  assert.equal(maxSubArray([4,1,-1,4,5,6,7,-200]), 26);
}

module.exports.test = test;
