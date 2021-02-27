/*
Max Area of Island

Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
Example 2:

[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
Note: The length of each dimension in the given grid does not exceed 50.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  var maxArea = 0;

  for(var i = 0; i < grid.length; i++) {
      for(var j = 0; j < grid[0].length; j++) {
          maxArea = Math.max(markIsland(i, j, grid), maxArea);
      }
  }

  return maxArea;
};

var markIsland = function(row, col, grid) {
  if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] == 0) {
      return 0;
  }

  grid[row][col] = 0;
  return 1 + markIsland(row + 1, col, grid) + markIsland(row - 1, col, grid) 
          + markIsland(row, col +1, grid) + markIsland(row, col - 1, grid);
}

module.exports.maxAreaOfIsland = maxAreaOfIsland;
