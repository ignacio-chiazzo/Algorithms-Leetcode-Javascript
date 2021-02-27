/*
Search a 2D Matrix
https://leetcode.com/problems/search-a-2d-matrix/description/

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(matrix.length === 0)
    return false;
  return searchMatrixAux(matrix, 0, matrix.length - 1, target);
};

var searchMatrixAux = function(matrix, firstRow, lastRow, target) {
  if(firstRow === lastRow) {
    var iter = 0; 
    while(iter < matrix[0].length) {
      if(matrix[firstRow][iter] === target)
        return true;
      iter++;
    }
  } else {
    var middle = Math.floor((firstRow + lastRow) / 2); // 0
    if(target > matrix[middle][matrix[0].length - 1]) 
      return searchMatrixAux(matrix, middle + 1, lastRow, target)
    else 
      return searchMatrixAux(matrix, firstRow, middle, target)
  }
  
  return false;
};

module.exports.searchMatrix = searchMatrix;
