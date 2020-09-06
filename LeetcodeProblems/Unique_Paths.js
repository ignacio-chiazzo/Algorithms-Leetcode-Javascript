/*
Unique Paths 
https://leetcode.com/problems/unique-paths/description/

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28

*/

// Solution 1
// This solution is a naive solution implementing a binary tree and visiting each node.
var uniquePaths1 = function(m, n) {
  return uniquePathsAux(0, 0, m, n)
};

var uniquePathsAux = function(row, col, rowLength, colLength) {
  if(row >= rowLength || col >= colLength) {
    return 0;
  }
  if(row == rowLength - 1 && col == colLength - 1) {
    return 1;
  }
  
  return uniquePathsAux(row + 1, col, rowLength, colLength) + 
    uniquePathsAux(row, col + 1, rowLength, colLength)
};

// Solution 2
// This solution is solution 1 but memoized.
var uniquePaths2 = function(m, n) {
  var memo = {};
  return uniquePathsAux2(0, 0, m, n, memo)
};

var uniquePathsAux2 = function(row, col, rowLength, colLength, memo) {
  if(memo[memoKey(row, col)]) {
    return memo[row + "-" + col];
  }
  if(row >= rowLength || col >= colLength) {
    return 0;
  }
  if(row == rowLength - 1 && col == colLength - 1) {
    return 1;
  }
  
  var result = uniquePathsAux(row + 1, col, rowLength, colLength, memo) + 
    uniquePathsAux(row, col + 1, rowLength, colLength, memo);
  memo[memoKey(row, col)] = result;
  return result;
};

var memoKey = function(row, col) {
  return row + "-" + col;
}

// Solution 3
// This solution uses Dinamic Programming
var uniquePaths3 = function(m, n) {
  var matrix = [];
  for(var i = 0; i < m; i++) {
    matrix[i] = [];
    for(var j = 0; j < n; j++) {
      if(i == 0 || j == 0) {
        matrix[i][j] = 1;
      } else{
        matrix[i][j] = 0;   
      }
    }
  }
  
  for(var row = 1; row < m; row++) {
    for(var col = 1; col < n; col++) {
      matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1]
    }
  }

  return matrix[m - 1][n - 1];
};

module.exports.uniquePaths1 = uniquePaths1;
module.exports.uniquePaths2 = uniquePaths1;
module.exports.uniquePaths3 = uniquePaths3;
