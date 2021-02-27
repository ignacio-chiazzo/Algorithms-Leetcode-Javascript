const assert = require('assert');
const searchMatrix = require('../../LeetcodeProblems/Algorithms/Search_a_2D_Matrix_II').searchMatrix;

const matrix1 = [
  [1,4,7,    11,15],
  [2,5,8,    12,19],
  [3,6,9,    16,22],
  [10,13,14, 17,24],
  [18,21,23, 26,30]
];

var test = function() {
  assert.equal(searchMatrix(matrix1, 5), true);
  assert.equal(searchMatrix(matrix1, 0), false);
  assert.equal(searchMatrix(matrix1, 15), true);
}

module.exports.test = test;
