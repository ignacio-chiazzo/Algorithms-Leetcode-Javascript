/*
Spiral Matrix
https://leetcode.com/problems/spiral-matrix/description/

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function(matrix) {
    if(matrix.length === 0)
      return [];
      
    var retArray = [];
    const rowLength = matrix.length;
    const colLength = matrix[0].length;
    const countRectangles = Math.ceil(Math.min(colLength, rowLength)/2)
    for(var i = 0; i < countRectangles; i++)
      printRect(matrix, i, rowLength, colLength, retArray);

    return retArray;
};

var printRect = function(matrix, i, rowLength, colLength, retArray) {
  const firstRow = i;
  const firstCol = i;
  const lastRow = rowLength - i - 1;
  const lastCol = colLength - i - 1;
  
  for(var col = firstCol; col <= lastCol; col++) {
    retArray.push(matrix[firstRow][col]);
  }
  for(var row = firstRow + 1; row <= lastRow; row++) {
    retArray.push(matrix[row][lastCol]);
  }
  if(firstRow === lastRow || firstCol === lastCol) {
    return;
  }
  for(var col = lastCol - 1; col >= firstCol; col--) {
    retArray.push(matrix[lastRow][col]);
  }
  for(var row = lastRow - 1; row > firstRow; row--) {
    retArray.push(matrix[row][firstCol]);
  }
}

module.exports.spiralOrder = spiralOrder;
