/*
Reverse String II
https://leetcode.com/problems/reverse-string-ii/description/

Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]
*/

var reverseStr = function(s, k) {
  if(k <= 1)
    return s;
  var ret = "";
  for(var iterK = 0; iterK * k < s.length; iterK = iterK + 2) {
    const start = iterK * k;
    const end = start + k - 1; 
  
    ret += reverse(s, start, end);
    ret += s.slice(end + 1, k * (iterK + 2)); 
  }
  
  return ret;
};

var reverse = function(s, start, end) {
  var ret = "";
  if(end >= s.length)
    end = s.length - 1;
  
  while(start <= end) {
    ret += s.charAt(end);
    end--;
  }
  return ret;
}

module.exports.reverseStr = reverseStr;
