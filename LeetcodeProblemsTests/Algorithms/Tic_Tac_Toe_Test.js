const TicTacToe = require('../../LeetcodeProblems/Algorithms/Tic_Tac_Toe').TicTacToe;

var test = function() {
  ticTacToe = new TicTacToe();
  ticTacToe.isBoardFull();
  ticTacToe.addToken(0, 1, "X");
  ticTacToe.printBoard();
  var iter = 0;

  while(iter < 8) {
    console.log(iter);
    const str = (iter % 2 == 0) ? "0" : "X"
    ticTacToe.makeMove(str);
    iter++;
  }

  console.log("after 8 moves");
  ticTacToe.isBoardFull();
  ticTacToe.printBoard();

  ticTacToe.addToken(0,0,"X");
  ticTacToe.printBoard();
}

module.exports.test = test;
