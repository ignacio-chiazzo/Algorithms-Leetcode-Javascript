/*
Remove Invalid Parentheses
https://leetcode.com/problems/remove-invalid-parentheses/

Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Example 1:

Input: "()())()"
Output: ["()()()", "(())()"]
Example 2:

Input: "(a)())()"
Output: ["(a)()()", "(a())()"]
Example 3:

Input: ")("
Output: [""]
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  var queue = [];
  var visited = new Set();
  queue.push(s);
  var result = [];
  var found = false;
    
  while(queue.length !== 0) {
    var str = queue.shift();
    if(isValid(str)) {
      result.push(str);
      found = true;
    } else if(!found){   
      for(var i = 0; i < s.length; i++) {
        if(str[i] === "(" || str[i] === ")") {
          var subStr = str.slice(0, i) + str.slice(i + 1, s.length);
          if(!visited.has(subStr)) {
            queue.push(subStr);   
            visited.add(subStr);
          }
        }    
      }
    }
  }
  
  return result;
};

var isValid = function(s) {
  var leftCount = 0;
  var iter = 0;
  while(iter < s.length) {
    if(s[iter] === "(") 
      leftCount++;
    else if(s[iter] === ")") {
      leftCount--;
      if(leftCount < 0)
        return false;
    }
    iter++;
  }    
  
  return leftCount === 0;
}

module.exports.removeInvalidParentheses = removeInvalidParentheses;
