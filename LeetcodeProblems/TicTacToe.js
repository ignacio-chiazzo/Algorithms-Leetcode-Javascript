
class TicTacToe {
  constructor() {
    this.matrix = [];
    for(var i = 0; i < 3; i++) {
      this.matrix[i] = [];
      for(var j = 0; j < 3; j++) {
        this.matrix[i][j] = "-";
      }
    }
  };

  validToken(token) {
    if (token == "X" || token == "0" || token == "-") {
      return true;
    }
    console.log("Token is invalid");
    return false;
  }

  addToken(x, y, token) {
    // Check valid positions
    if(this.validToken(token)) {
      this.matrix[x][y] = token;
    }
  };

  printBoard() {
    for(var row = 0; row < 3; row ++) {
      console.log(this.matrix[row][0] + "|" 
      + this.matrix[row][1] + "|" 
      + this.matrix[row][2]); // Check new line;
    }
  }

  isBoardFull() {
    for(var row = 0; row < 3; row ++) {
      for(var col = 0; col < 3; col ++) { 
        if(this.matrix[row][col] === "-") {
          console.log("Is not full");
          return false;
        }
      }  
    }
    console.log("Is full");
    return true;
  }

  makeMove() {
    if(this.isBoardFull()) {
      throw "Error Board is Full";
    }
    for(var row = 0; row < 3; row ++) {
      for(var col = 0; col < 3; col ++) { 
        if(this.matrix[row][col] === "-") {
          this.addToken(row, col, "0");
        }
      }  
    }
  }
}

var main = function() {
  console.log("TBD");
}

module.exports.main = main;

ticTacToe = new TicTacToe();
// ticTacToe.isBoardFull();
// ticTacToe.addToken(0,1,"X");
// ticTacToe.printBoard();
// var iter = 0;
// while(iter < 8) {
//   ticTacToe.makeMove();
//   iter++;
// }

// console.log("after 8 moves");
// ticTacToe.isBoardFull();
// ticTacToe.printBoard();
// ticTacToe.makeMove();

// ticTacToe.printBoard();
// ticTacToe.addToken(0,0,"X");
// ticTacToe.printBoard();



// // var readline = require('readline')

// // const rl = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout
// // });

// // var response = rl.question('Whats your name : ', answer)

// // function answer(response) {
// //     console.log(response)
// // }