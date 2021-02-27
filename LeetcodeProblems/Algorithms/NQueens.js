/* 
NQueens
https://leetcode.com/problems/n-queens/description/

Example:

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
*/    


/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  var sol = [];
  solveNQueensAux(n, 0, new Set(), new Set(), new Set(), [], sol);
  return parseSolutions(sol, n);
};

var solveNQueensAux = function(n, row, diagonalDiffs, diagonalSums, cols, currentSol, sol) {
  if(row == n) { 
    sol.push(currentSol);  
    return; 
  }
  
  for(var i = 0; i < n; i++) {
    const diagonalDiff = i - row;
    const diagonalSum = i + row;
    if(!diagonalDiffs.has(diagonalDiff) && !cols.has(i) && !diagonalSums.has(diagonalSum)) {
      diagonalDiffs.add(diagonalDiff);
      diagonalSums.add(diagonalSum);
      cols.add(i);
      solveNQueensAux(n, row + 1, diagonalDiffs, diagonalSums, cols, [...currentSol, ...[[row, i]]], sol);
      cols.delete(i);
      diagonalDiffs.delete(diagonalDiff);
      diagonalSums.delete(diagonalSum);
    }
  }
}

var parseSolutions = function(sols, n) {
  var matrixes = [];
  for(var i = 0; i < sols.length; i++) {
    var sol = sols[i];
    var matrix = [];
    for(var row = 0; row < n; row++) {
      matrix[row] = []
      const queenPos = sol[row];
      for(var col = 0; col < n; col++) {
        matrix[row] += (queenPos[1] == col) ? "Q" : ".";
      }
    }

    matrixes.push(matrix);
  }

  return matrixes;
}

module.exports.solveNQueens = solveNQueens;
