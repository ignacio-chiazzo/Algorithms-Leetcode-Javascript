/*
Set Matrix Zeroes
https://leetcode.com/problems/set-matrix-zeroes/

Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  if(matrix.length === 0)
      return;
  
  var pivotRow = -1;
  var pivotCol = -1;
  var iterRow = 0;
  var iterCol = 0;
  var found = false;
  
  // Find a pivot
  while(!found && iterRow < matrix.length) {
    iterCol = 0;
    while(!found && iterCol < matrix[0].length) {
      if(matrix[iterRow][iterCol] === 0) {
        found = true
        pivotRow = iterRow;
        pivotCol = iterCol;
      }
      iterCol++;
    }
    iterRow++;
  }
  
  if (!found)
    return;
  
  // Update the Column value
  for(var i = 0; i < matrix.length; i++) {
    if(i == pivotRow)
      continue
    for(var j = 0; j < matrix[0].length; j++) {
      if(j == pivotCol)
        continue;
      if(matrix[i][j] === 0) {
        matrix[i][pivotCol] = 0;
        matrix[pivotRow][j] = 0;
      }
    }
  }
  
  for(var i = 0; i < matrix.length; i++)
    if(matrix[i][pivotCol] === 0 && i !== pivotRow)
      fillRow(matrix, i);
  
  for(var i = 0; i < matrix[0].length; i++)
    if(matrix[pivotRow][i] === 0 && i !== pivotCol)
      fillCol(matrix, i);
  
  fillCol(matrix, pivotCol);
  fillRow(matrix, pivotRow);

  return matrix;
};

var fillRow = function(matrix, row) {
  for(var i = 0; i < matrix[0].length; i++)
      matrix[row][i] = 0;
}

var fillCol = function(matrix, col) {
  for(var i = 0; i < matrix.length; i++)
    matrix[i][col] = 0;
}

module.exports.setZeroes = setZeroes;
