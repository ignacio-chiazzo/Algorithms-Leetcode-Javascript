/*
https://leetcode.com/problems/minimum-size-subarray-sum

Given an array of positive integers nums and a positive integer target, 
return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] 
of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLength = function(target, nums) {
  if(nums.length == 0) { return 0; }
  
  let start = 0;
  let end = 0;
  let currentSum = nums[0];
  let minWindow = 0;
  let currentWindow = 1;
  
  while(start < nums.length && end < nums.length) {
    currentWindow = (end + 1 - start); 
    if(currentSum >= target || (minWindow != 0 && currentWindow > minWindow) )  {
      if(minWindow == 0 || minWindow > currentWindow ) {
        minWindow = currentWindow;
        if(minWindow == 1) { return 1; }
      }
      currentSum -= nums[start];
      start++;
    } else {
      end++;
      if(end < nums.length) {
        currentSum += nums[end];
      }
    }
  }
  
  return minWindow;
};

module.exports.minSubArrayLength = minSubArrayLength;
