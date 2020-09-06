
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
    console.log("-------");
    for(var row = 0; row < 3; row ++) {
      console.log(this.matrix[row][0] + "|" 
      + this.matrix[row][1] + "|" 
      + this.matrix[row][2]); // Check new line;
    }
    console.log("------- \n");
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

  makeMove(str) {
    if(this.isBoardFull()) {
      throw "Error Board is Full";
    }
    for(var row = 0; row < 3; row ++) {
      for(var col = 0; col < 3; col ++) { 
        if(this.matrix[row][col] === "-") {
          this.addToken(row, col, str);
          return true;
        }
      }
    }
  }
}

module.exports.TicTacToe = TicTacToe;
