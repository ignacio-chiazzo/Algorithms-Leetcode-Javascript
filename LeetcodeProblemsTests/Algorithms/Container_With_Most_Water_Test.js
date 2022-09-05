const assert = require('assert');
const maxArea = require('../../LeetcodeProblems/Algorithms/Container_With_Most_Water_Test').maxArea;

function test() {
  assert.equal(49, maxArea([1,8,6,2,5,4,8,3,7]));
  assert.equal(1, maxArea([1,1]));
  
}

module.exports.test = test;