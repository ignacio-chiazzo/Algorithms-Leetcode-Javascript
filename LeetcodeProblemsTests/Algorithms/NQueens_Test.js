const assert = require('assert');
const solveNQueens = require('../../LeetcodeProblems/Algorithms/NQueens').solveNQueens;

// TODO: Add assertions

var test = function() {
  printMatrixes(solveNQueens(4), 4);
  printMatrixes(solveNQueens(5), 5);
  printMatrixes(solveNQueens(6), 6);
}

var printMatrixes = function(matrixes, n) {
  console.log("Start solution of n: " + n);
  for(var i = 0; i < matrixes.length; i++) {
    printMatrix(matrixes[i]);
  }
  console.log("End solution of n: " + n);
}

var printMatrix = function(matrix) {
  console.log("------------");
  for(var i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }
  console.log("------------");
}

module.exports.test = test;
