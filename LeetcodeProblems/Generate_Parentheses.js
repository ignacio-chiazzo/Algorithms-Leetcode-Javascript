/* 
Generate Parentheses
https://leetcode.com/problems/generate-parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

// ************************************************  Approach1  ************************************************
var generateParenthesesApproach1 = function(n) {
  if(n === 0) { return [] };

  var str = "(".repeat(n);
    sol = [];
  
  genParAux(str, 0, 0, sol)
  return sol;
};

/* 
@param {string} str contains the string generated.
@param {number} position Current position of the string where new parenthesis would be added.
@param {string} leftParenthesis Amount for parenthesis left to be added.
@param {[string]} sol array that contains the solution found so far.
*/
var genParAux = function(str, position, leftParentheses, sol) {
  if(position === str.length) {
    var ret = str + ")".repeat(leftParentheses);
    sol.push(ret);
    return;
  }

  genParAux(str, position + 1, leftParentheses + 1, sol); // Don't insert anything
  if(leftParentheses === 0) { return; }

  for(var i = 1; i <= leftParentheses; i++) {
    var parString = ")".repeat(i);
    var partSol = str.slice(0, position) + parString + str.slice(position); // Insert i parentheses in the position
    genParAux(partSol, position + i + 1, leftParentheses - i + 1, sol);
  } 
}

// ************************************************  Approach2  ************************************************
var generateParenthesesApproach2 = function(n) {
  if(n === 0) { return [] };

  var sol = [];
  genParAuxApproach2("", 0, 0, 0, n * 2, sol)
  return sol;
}

var genParAuxApproach2 = function(str, leftPar, rightPar, index, totalCharCount, sol) {
  if(index === totalCharCount) {
    if(rightPar === leftPar) {
      sol.push(str);
    }
    return;
  }

  var strLeft = insertAt(str, index, "(");
  genParAuxApproach2(strLeft, leftPar + 1, rightPar, index + 1, totalCharCount, sol);

  if(rightPar === leftPar) { return; }
  
  var strRight = insertAt(str, index, ")");
  genParAuxApproach2(strRight, leftPar, rightPar + 1, index + 1, totalCharCount, sol);
}

var insertAt = function(str, position, value) {
  return str.slice(0, position) + value + str.slice(position);
}

function main() {
  console.log("Approach 1");
  [0, 1, 2, 3].forEach(function(elem) {
    console.log(`${elem}: ${generateParenthesesApproach2(elem)}`);
  })

  console.log("-------------");

  console.log("Approach 2");
  [0, 1, 2, 3].forEach(function(elem) {
    console.log(`${elem}: ${generateParenthesesApproach2(elem)}`);
  })
}

module.exports.main = main
