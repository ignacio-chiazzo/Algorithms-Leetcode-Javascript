/*
2428. Maximum Sum of an Hourglass

You are given an m x n integer matrix grid.
We define an hourglass as a part of the matrix with the following form:
For Input : [[6,2,1],[4,2,1],[9,2,8]]
The Hourglass sum would be => 6 + 2 + 1 + 2( 2nd row , 2nd column) + 9 + 2 + 8

Return the maximum sum of the elements of an hourglass.

Note that an hourglass cannot be rotated and must be entirely contained within the matrix.

Constraints:

m == grid.length
n == grid[i].length
3 <= m, n <= 150
0 <= grid[i][j] <= 106

Input: grid = [[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]]
Output: 30
Explanation: The cells shown above represent the hourglass with the maximum sum: 6 + 2 + 1 + 2 + 9 + 2 + 8 = 30.


Input: grid = [[1,2,3],[4,5,6],[7,8,9]]
Output: 35
Explanation: There is only one hourglass in the matrix, with the sum: 1 + 2 + 3 + 5 + 7 + 8 + 9 = 35.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  if(m<3 || n < 3) {
      return 0;
  }
  let max = 0;
  for(let i = 0; i<m-2; i++)
      for(let j = 0; j<n-2;j++)
      {
          let cur = grid[i][j] + grid[i][j+1] + grid[i][j+2] + grid[i+1][j+1] + grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2];
          max = Math.max(cur, max);
      }
  return max;  
};