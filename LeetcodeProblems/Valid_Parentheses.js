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
  if(s.length === 0)
    return true;
  var queue = [];
  for(var i = 0; i < s.length; i++) {
    const elem = s[i];
    if(elem === "(" || elem === "[" || elem === "{") {
      queue.unshift(elem);
    } else {
      if(queue.length === 0)
          return false;
      
      const elemQueue = queue.shift();
      if(elemQueue === "(" && elem !== ")" ||
        elemQueue === "[" && elem !== "]" ||
        elemQueue === "{" && elem !== "}")
          return false;
      }
  }
  
  return queue.length === 0;
};

var main = function(){
  console.log(isValid(""));
  console.log(isValid("()"));
  console.log(isValid("([)]"));
  console.log(isValid("{[()]}{[()]}"));
  console.log(isValid("{[())()]}"));
}

module.exports.main = main
