/*
Minimum Add to Make Parentheses Valid
https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/

A parentheses string is valid if and only if:

It is the empty string,
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
Return the minimum number of moves required to make s valid.
 
Example 1:

Input: s = "())"
Output: 1
Example 2:

Input: s = "((("
Output: 3
 
Constraints:

1 <= s.length <= 1000
s[i] is either '(' or ')'.
*/


var minAddToMakeValid = function(s) {
  var opening = 0;
  var extraParClosing = 0;
  
  for(let i = 0; i < s.length; i++) {
      if(s.charAt(i) == "(") {
          opening++;
      } else if(s.charAt(i) == ")") {
          if(opening == 0) {
              extraParClosing++;
          } else {
              opening--;;
          }
      } 
  }
  return extraParClosing + opening;
};

// Solution 2 using a queue
var minAddToMakeValidUsingQueue = function(s) {
  var queue = [];
  var extraParClosing = 0;
  
  for(let i = 0; i < s.length; i++) {
      if(s.charAt(i) == "(") {
          queue.push(s.charAt(i))
      } else if(s.charAt(i) == ")") {
          if(queue.length > 0) {
              queue.pop();
          } else {
              extraParClosing++;
          }
      } 
  }

  return extraParClosing + queue.length;
};

module.exports.minAddToMakeValid = minAddToMakeValid;