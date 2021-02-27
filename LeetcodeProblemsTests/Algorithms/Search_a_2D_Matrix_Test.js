const assert = require('assert');
const searchMatrix = require('../../LeetcodeProblems/Algorithms/Search_a_2D_Matrix').searchMatrix;

var test = function() {
  assert.equal(searchMatrix([], 0), false);
  assert.equal(searchMatrix([[1], [3]], 3), true);
  assert.equal(searchMatrix([[1], [3]], 1), true);
  const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]];
  assert.equal(searchMatrix(matrix, 3), true);
}

module.exports.test = test;
