/*
Regular Expression Matching
https://leetcode.com/problems/regular-expression-matching/description/
 
Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.
Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
Example 4:

Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".
Example 5:

Input:
s = "mississippi"
p = "mis*is*p*."
Output: false

 * @param {*} s 
 * @param {*} p 
 */


var isMatch = function(s, p) {
  return isMatchAux(s, p, 0, 0);
};

var isMatchAux = function(str, pattern, posStr, posPat) {
  if(posStr == str.length)
    return posPat == pattern.length || canBeZero(pattern, posPat);

  if(posPat < pattern.length - 1 && pattern.charAt(posPat + 1) == "*") {
    const valuePattern = pattern.charAt(posPat);
    posPat = posPat + 2;

    if (isMatchAux(str, pattern, posStr, posPat)) { // 0 matches
      return true
    }
    
    while(posStr < str.length && (str.charAt(posStr) === valuePattern || valuePattern === ".")) {
      if(isMatchAux(str, pattern, posStr + 1, posPat)) {
        return true;
      }
      posStr++;
    }
  } else if(str.charAt(posStr) === pattern.charAt(posPat) || pattern.charAt(posPat) === ".") {
    return isMatchAux(str, pattern, posStr + 1, posPat + 1);
  }
  
  return false;
}

var canBeZero = function(pattern, posPat) {
  while(posPat < pattern.length && pattern.charAt(posPat) == "*" || 
    posPat < pattern.length - 1 && pattern.charAt(posPat + 1) == "*") {
    posPat++;
  }
  
  return posPat == pattern.length;
}

module.exports.isMatch = isMatch;
