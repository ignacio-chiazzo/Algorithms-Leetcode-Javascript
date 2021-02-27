/*
Minimum Window Substring
https://leetcode.com/problems/minimum-window-substring/

Given a string S and a string T, find the minimum window in S which will contain all the characters in T 
in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/


var minWindow = function(s, t) {
  if(t.length === 0 || s.length < t.length)
    return "";
  
  var start = 0;
  var end = 0;
  var solutionStart, solutionEnd;
  var hashT = getHash(t);
  var currentHash = {};
  var currentCount = 0;
  while(end < s.length) {
    const letter = s.charAt(end);
    if(hashT[letter]) {
      currentHash[letter] = (currentHash[letter]) ? currentHash[letter] + 1 : 1;
      if(currentHash[letter] <= hashT[letter])
        currentCount++;
      if(currentCount === t.length) {
        while(hashT[s[start]] === undefined || currentHash[s[start]] > hashT[s[start]]) {
          if(currentHash[s[start]] !== undefined)
            currentHash[s[start]] = currentHash[s[start]] - 1;
          
          start++;
        }
        if(solutionEnd === undefined || end - start < solutionEnd - solutionStart) {
          solutionStart = start;
          solutionEnd = end;
        }

        currentHash[s[start]] = currentHash[s[start]] - 1;
        start++;
        currentCount--;
      }
    }
    end++;
  }
  
  return s.slice(solutionStart, solutionEnd + 1);
};    

var getHash = function(t) {
  var hash = {};
  for(var i = 0; i < t.length; i++) {
    const letter = t.charAt(i);
    hash[letter] = (hash[letter]) ? hash[letter] + 1 : 1;
  }
  return hash;
}

module.exports.minWindow = minWindow;
