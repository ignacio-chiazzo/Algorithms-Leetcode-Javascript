/*
Number of Islands
https://leetcode.com/problems/number-of-islands/

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and 
is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/


/*
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if(grid.length === 0)
      return 0;
  
  var countIslands = 0;
  const rowsCount = grid.length;
  const columnsCount = grid[0].length;
  for(var i = 0; i < rowsCount; i++) {
    for(var j = 0; j < columnsCount; j++) {
      if(grid[i][j] == 1) {
        countIslands++;
        colorIsland(grid, i, j, rowsCount, columnsCount);
      }
    }
  }
  
  return countIslands;
};

var colorIsland = function(grid, i, j, rowsCount, columnsCount) {
  if(i < 0 || j < 0 || i >= rowsCount || j >= columnsCount || grid[i][j] == 0)
      return;
  
  grid[i][j] = 0;
  
  colorIsland(grid, i - 1, j, rowsCount, columnsCount);
  colorIsland(grid, i + 1, j, rowsCount, columnsCount);
  colorIsland(grid, i, j - 1, rowsCount, columnsCount);
  colorIsland(grid, i, j + 1, rowsCount, columnsCount);
}

module.exports.numIslands = numIslands;
