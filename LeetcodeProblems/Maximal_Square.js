/*
Maximal Square
https://leetcode.com/problems/maximal-square/

Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
*/


/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  var maxSquare = 0;
  for(var i = 0; i < matrix.length; i++) {
    for(var j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] === "1") { // found a 1
        const currentMaxSideLength = getCurrentMaxSideLength(matrix, i, j);
        if(currentMaxSideLength ** 2 > maxSquare)
          maxSquare = currentMaxSideLength ** 2;
      }   
    }
  }
  
  return maxSquare;
};

var getCurrentMaxSideLength = function(matrix, i, j) {
  var max = 1;
  while(i + max < matrix.length && j + max < matrix[0].length) {
    var lastRow = i + max;
    var lastCol = j + max;
        
    // check last column
    var iterRow = i; 
    while(iterRow <= lastRow){
      if(matrix[iterRow][lastCol] === "0")
        return max;
      
      iterRow++;
    }
    
    // check last row
    var iterCol = j;
    while(iterCol <= lastCol) {
      if(matrix[lastRow][iterCol] === "0")
        return max;
      iterCol++;
    }
    
    max++;
  }
  
  return max;
}

module.exports.maximalSquare = maximalSquare;
