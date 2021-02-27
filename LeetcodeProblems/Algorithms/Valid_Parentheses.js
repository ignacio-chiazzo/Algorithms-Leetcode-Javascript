/*
Valid Parentheses
https://leetcode.com/problems/valid-parentheses/description/

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

var isValid = function(s) {
  var stack = [];
  for(var i = 0; i < s.length; i++) {
    var elem = s.charAt(i);
    if(elem === ")" || elem === "]" || elem === "}") {
      if(stack.length === 0)
        return false; 
      var lasPar = stack.shift();
      if(!valid(lasPar, elem))
          return false;
    } else {
      stack.unshift(elem);
    }
  }
  
  return stack.length === 0;
};

var valid = function(parOpen, parClose) {
  return parOpen === "(" && parClose === ")" || 
      parOpen === "[" && parClose === "]" || 
      parOpen === "{" && parClose === "}";
}

module.exports.isValid = isValid;
