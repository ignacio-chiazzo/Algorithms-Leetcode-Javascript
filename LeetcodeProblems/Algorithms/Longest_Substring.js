/*
Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters

Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  if(s.length == 0) { return 0 }
  
  var repeatedChars = new Set();
  var maxLength = 1;
  var currentMaxLength = 1;
  var start = 0;
  var end = 0;
  repeatedChars.add(s.charAt(start));
  
  while(end + 1 < s.length && start < s.length) {
    if(repeatedChars.has(s.charAt(end + 1))) {
      if(repeatedChars.has(s.charAt(start))) {
          currentMaxLength--;
          repeatedChars.delete(s.charAt(start))
      }
        start++;
    } else {
      repeatedChars.add(s.charAt(end + 1));
      currentMaxLength++;
      if(currentMaxLength > maxLength) {
          maxLength = currentMaxLength;
      }
      end++;
    }
  }
  
  return maxLength;
};

module.exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
