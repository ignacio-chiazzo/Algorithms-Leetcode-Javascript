/*
Permutation in String
https://leetcode.com/problems/permutation-in-string/

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2.

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false

Constraints:
1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if(s1.length > s2.length) {
    return false;
  }
  
  let start = 0;
  let end = s1.length - 1;
  let countLeft = s1.length;
  let hashBuild = {};
  
  for(var i = 0; i < s1.length; i++) {
    hashBuild[s1[i]] = (hashBuild[s1[i]] || 0) + 1;
  }
  
  for(var j = start; j < end; j++) { // TODO: didn't count upper bound
    if(hashBuild[s2[j]] !== undefined) {
      hashBuild[s2[j]] = hashBuild[s2[j]] - 1;
      if(hashBuild[s2[j]] >= 0) {
        countLeft--;
      }
    }
  }
  
  while(end < s2.length) {
    if(hashBuild[s2[end]] !== undefined) {
      hashBuild[s2[end]] = hashBuild[s2[end]] - 1;
      if(hashBuild[s2[end]] >= 0) {
        countLeft--;
      }
    }
      
    if(countLeft == 0) { return true; }
      
    if(hashBuild[s2[start]] !== undefined) {
      hashBuild[s2[start]] = hashBuild[s2[start]] + 1;
      if(hashBuild[s2[start]] >= 1) {
        countLeft++;
      }
    }
      
    start++;
    end++;
  }
  
  return false;
};

module.exports.checkInclusion = checkInclusion;