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
  
  var minRow = 0;
  var maxRow = matrix.length - 1;
  var minCol = 0
  var maxCol = matrix[0].length - 1;
  
  const row = findRow(matrix, target, maxCol, minRow, maxRow);
  const col = findColumn(matrix, target, row, minCol, maxCol);

  return target === matrix[row][col];
};

var findRow = function(matrix, target, maxCol, minRow, maxRow) {
  while(minRow < maxRow) {
    var midRow = Math.floor((minRow + maxRow) / 2);
    if(matrix[midRow][0] <= target && matrix[midRow][maxCol] >= target) {
        return midRow;    
    } if(matrix[midRow][0] < target)
        minRow = midRow + 1;
    else {
        maxRow = midRow - 1;
    }    
  }

  return minRow;
}
  
var findColumn = function(matrix, target, row, minCol, maxCol) {
  while(minCol < maxCol) {
    const midCol = Math.floor((minCol + maxCol) / 2);
    if(matrix[row][midCol] == target) {
        return midCol;    
    } else if(matrix[row][midCol] < target)
        minCol = midCol + 1;
    else {
        maxCol = midCol - 1;
    }    
  }

  return minCol;
}

var main = function(){
  const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]];
  console.log(searchMatrix(matrix, 3));
}

module.exports.main = main;
