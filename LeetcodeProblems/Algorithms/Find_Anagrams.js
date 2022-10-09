/*
Find All Anagrams in a String
https://leetcode.com/problems/find-all-anagrams-in-a-string/

Given two strings s and p, return an array of all the start indices of p's anagrams in s. 
You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
ypically using all the original letters exactly once.

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  if(s.length < p.length) { return []; }
  
  let start = 0;
  let end = p.length - 1;
  let hashBuild = {};
  let countLeft = p.length;
  let anagrams = [];
  
  for(let e = 0; e < p.length; e++) {
    hashBuild[p[e]] = hashBuild[p[e]] !== undefined ? hashBuild[p[e]] + 1 : 1;  
  }

  for(let i = start; i < end; i++) {
    if(hashBuild[s[i]]  !== undefined) {
      hashBuild[s[i]] = hashBuild[s[i]] - 1;
      if(hashBuild[s[i]] >= 0) {
        countLeft--;
      }
    }
  }
  
  while(end < s.length) {
    // check left
    if(hashBuild[s[end]] !== undefined) {
      hashBuild[s[end]] = hashBuild[s[end]] - 1;
      if(hashBuild[s[end]] >= 0) {
        countLeft--;
      }
      if(countLeft == 0) {
        anagrams.push(start);
      } 
    }
      
    // check right
    if(hashBuild[s[start]] !== undefined) {
      hashBuild[s[start]] = hashBuild[s[start]] + 1;
      if(hashBuild[s[start]] >= 1) {
        countLeft++;
      }
    }
      
    // slide window
    end++;
    start++;
  }
  
  return anagrams;
};

module.exports.findAnagrams = findAnagrams;
