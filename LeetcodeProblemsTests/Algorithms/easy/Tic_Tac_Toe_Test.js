const TicTacToe = require("../../../LeetcodeProblems/Algorithms/easy/Tic_Tac_Toe").TicTacToe;

var test = function() {
  let ticTacToe = new TicTacToe();
  ticTacToe.isBoardFull();
  ticTacToe.addToken(0, 1, "X");
  ticTacToe.printBoard();
  var iter = 0;

  while(iter < 8) {
    const str = (iter % 2 == 0) ? "0" : "X";
    ticTacToe.makeMove(str);
    iter++;
  }

  ticTacToe.isBoardFull();
  ticTacToe.printBoard();

  ticTacToe.addToken(0,0,"X");
  ticTacToe.printBoard();
};

module.exports.test = test;
