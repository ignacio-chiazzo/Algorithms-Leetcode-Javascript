/* 
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

var generateParentheses = function(n) {
  if(n == 0) { return [""] };

  var str = "(".repeat(n);
  var sol = [];
  genParAux(str, 0, 0, sol)
  return sol;
};

var genParAux = function(str, position, leftParentheses, sol) {
  if(position === str.length) {
    var ret = str + ")".repeat(leftParentheses);
    sol.push(ret);
    return;
  }

  genParAux(str, position + 1, leftParentheses + 1, sol); // Don't insert anything
  if(leftParentheses == 0) { return; }

  for(var i = 1; i <= leftParentheses; i++) {
    var parString = ")".repeat(i);
    var partSol = str.slice(0, position) + parString + str.slice(position); // Insert i parentheses in the position
    genParAux(partSol, position + i + 1, leftParentheses - i + 1, sol);
  } 
}

function main() {
  console.log("0:");
  console.log(generateParentheses(0));
  console.log("1:");
  console.log(generateParentheses(1));
  console.log("2:");
  console.log(generateParentheses(2));
  console.log("3:");
  console.log(generateParentheses(3));
}

module.exports.main = main
