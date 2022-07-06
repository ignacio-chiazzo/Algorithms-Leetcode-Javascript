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

// Solution 1
var minWindow = function (s, t) {
  if (t.length === 0 || s.length < t.length) return "";

  var start = 0;
  var end = 0;
  var solutionStart, solutionEnd;
  var hashT = getHash(t);
  var currentHash = {};
  var currentCount = 0;
  while (end < s.length) {
    const letter = s.charAt(end);
    if (hashT[letter]) {
      currentHash[letter] = currentHash[letter] ? currentHash[letter] + 1 : 1;
      if (currentHash[letter] <= hashT[letter]) currentCount++;
      if (currentCount === t.length) {
        while (
          hashT[s[start]] === undefined ||
          currentHash[s[start]] > hashT[s[start]]
        ) {
          if (currentHash[s[start]] !== undefined)
            currentHash[s[start]] = currentHash[s[start]] - 1;

          start++;
        }
        if (
          solutionEnd === undefined ||
          end - start < solutionEnd - solutionStart
        ) {
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

var getHash = function (t) {
  var hash = {};
  for (var i = 0; i < t.length; i++) {
    const letter = t.charAt(i);
    hash[letter] = hash[letter] ? hash[letter] + 1 : 1;
  }
  return hash;
};



// Solution 2
// Similar idea code slightly different;
var buildHash = function(t) {
    let hash = {};
    let occ = 0;
    for(var i = 0; i < t.length; i++) {
        occ = hash[t[i]] == undefined ? 0 : hash[t[i]];
        hash[t[i]] = occ + 1;
    }
    return hash;
}

var minWindow2 = function(s, t) {
    var hashT = buildHash(t);
    var start = 0; 
    var end = 0;
    var countLeft = t.length;
    var minWindow = "";
    var minWindowLeft = -1;
    var maxWindowRight = -1;

    while(start < s.length && end < s.length) {
        if(countLeft > 0) { // window does not contain all elements            
            if(hashT[s[end]] !== undefined) {
                hashT[s[end]] = hashT[s[end]] - 1;
                if(hashT[s[end]] >= 0) {
                    countLeft--;
                }
            }
            
            if(countLeft > 0) {
                end++;
            }
        } else { // found window
            if(minWindowLeft == -1 || ((maxWindowRight - minWindowLeft + 1) > (end - start + 1)) ) {
                minWindowLeft = start;
                maxWindowRight = end;
            }
           if(hashT[s[start]] !== undefined) {
               hashT[s[start]] = hashT[s[start]] + 1;
               if(hashT[s[start]] > 0) {
                   countLeft++;
                   end++;
               }
           }
           start++;
        }
    }
    
    if(minWindowLeft > -1) {
        return s.substring(minWindowLeft, maxWindowRight + 1);
    }
    
    return "";
};



module.exports.minWindow = minWindow;
