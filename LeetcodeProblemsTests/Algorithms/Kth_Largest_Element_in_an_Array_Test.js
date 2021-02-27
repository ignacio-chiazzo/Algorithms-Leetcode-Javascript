const assert = require('assert');
const findKthLargest = require('../../LeetcodeProblems/Algorithms/Kth_Largest_Element_in_an_Array').findKthLargest;

function test() {
  assert.equal(findKthLargest([3,2,1,5,6,4], 2), 5);
  assert.equal(findKthLargest([3,2,3,1,2,4,5,5,6], 4), 4);
  assert.equal(findKthLargest([0], 1), 0);
  assert.equal(findKthLargest([], 1), undefined);
}

module.exports.test = test;
