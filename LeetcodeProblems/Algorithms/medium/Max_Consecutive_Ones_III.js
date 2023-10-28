/*
Max Consecutive Ones III
https://leetcode.com/problems/max-consecutive-ones-iii

Given a binary array nums and an integer k, return the maximum number of consecutive 1's 
in the array if you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
*/

var longestOnes = function(nums, k) {
  let start = 0;
  let end = 0; 
  let maxWindow = 0;
  while(start < nums.length && end < nums.length) {
    if(k > 0 || nums[end] == 1) {
      if(nums[end] == 0) { k--; }
      maxWindow = Math.max(maxWindow, end - start + 1);
      end++;
    } else { // k = 0 and nums[end] == 0
      while(k == 0 && start < nums.length) {
        if(nums[start] == 0) {
          k++;
        }
        start++;
      }
    }
  }
  
  return maxWindow;
};

module.exports.longestOnes = longestOnes;
