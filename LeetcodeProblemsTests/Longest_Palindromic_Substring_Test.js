/* 
Longest Palindromic Substring
https://leetcode.com/problems/longest-palindromic-substring/description/

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/
const assert = require('assert');

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(str) {
	if(str.length == 0)
		return "";
	
  var maxPal = 1; 
	var posPalStart = 0;
  var currentPalStart = 0;

	for(var i = 1; i < str.length; i++) {
    if(str.charAt(i - 1) == str.charAt(i)) { 
      currentPalStart = i - 1;
      var currentPal = 2; 
      var iter = 1;
      while(i - iter - 1  >= 0 && i + iter < str.length && str.charAt(i - iter - 1) == str.charAt(i + iter)) {
        currentPalStart = i - iter - 1;
        iter++;
        currentPal += 2;
      }
    } 
    if(currentPal > maxPal) {
      maxPal = currentPal;
      posPalStart = currentPalStart;
    }
  }
  
  for(var i = 1; i < str.length - 1; i++) {
    if(str.charAt(i - 1) == str.charAt(i + 1)) {
      currentPal = 1;
      var iter = 1;
      while(i - iter >= 0 && i + iter < str.length && str.charAt(i - iter) == str.charAt(i + iter)) {
        currentPalStart = i - iter;
        iter++;
        currentPal += 2;
      }
    }
    if(currentPal > maxPal) {
      maxPal = currentPal;
      posPalStart = currentPalStart;
    }
  }
  
  return str.slice(posPalStart, posPalStart + maxPal);
}

var main = function() {
  test();
}

function test() {
  assert.equal(longestPalindrome("pabcdcbte"), "bcdcb");
  assert.equal(longestPalindrome("bb"), "bb");
  assert.equal(longestPalindrome(""), "");
  assert.equal(longestPalindrome("bbb"), "bbb");
  assert.equal(longestPalindrome("bbbb"), "bbbb");
  assert.equal(longestPalindrome("ptabbbbat"), "tabbbbat");
}

module.exports.main = main
