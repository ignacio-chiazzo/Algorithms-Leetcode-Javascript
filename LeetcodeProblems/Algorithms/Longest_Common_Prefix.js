/**
Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return "";
  
  return strs.reduce((result, curr)=>{
    let i = 0;
    while(result[i] && curr[i] && result[i] === curr[i]) i++;
    return result.slice(0, i);
  });
};

module.exports.longestCommonPrefix = longestCommonPrefix;