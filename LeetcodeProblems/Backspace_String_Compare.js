/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
https://leetcode.com/problems/backspace-string-compare

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  var iterS = S.length - 1;
  var iterT = T.length - 1;
  
  while(iterS >= 0 || iterT >= 0) {
    if(iterS >= 0 && S.charAt(iterS) === "#") {
      var countBack = 0;
      while(iterS >= 0 && (countBack > 0 || S[iterS] === "#")) {
        if(iterS >= 0 && S[iterS] === "#") {
          countBack++;
        } else {
          countBack--;
        }

        iterS--;
      }
    } else if(iterT >= 0 && T.charAt(iterT) === "#") {
    var countBack = 0;
    while(iterT >= 0 && (countBack > 0 || T[iterT] === "#")) {
      if(iterT >= 0 && T[iterT] === "#") {
        countBack++;
      } else {
        countBack--;
      }
      
      iterT--;
    }
    } else {
      if(iterS < 0 || iterT < 0 || S.charAt(iterS) !== T.charAt(iterT))
        return false;
      
      iterS--;
      iterT--;
    }
  }
  
  return iterS < 0 && iterT < 0;  
};

// Naive Aproach 
var backspaceCompare2 = function(S, T) {
  var stackS = [];
  for(var i = 0; i < S.length; i++) {
    if(S.charAt(i) === "#") 
      stackS.shift();
    else 
      stackS.unshift(S.charAt(i));
  }
  
  var stackT = [];
  for(var i = 0; i < T.length; i++) {
    if(T.charAt(i) === "#") 
      stackT.shift();
    else 
      stackT.unshift(T.charAt(i));
  }
  
  while(stackS.length > 0 && stackT.length > 0) {
    var elemS = stackS.shift();
    var elemT = stackT.shift();
    if(elemS !== elemT)
        return false;
      
  }
  
  return stackS.length === 0 && stackT.length === 0;
};

module.exports.backspaceCompare = backspaceCompare;
module.exports.backspaceCompare2 = backspaceCompare2;
