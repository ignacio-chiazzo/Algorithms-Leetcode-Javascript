/*
3Sum Closest
https://leetcode.com/problems/3sum-closest/

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
 

Constraints:

3 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-104 <= target <= 104
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let mid = 1;
  let right = nums.length - 1;
  let currentSum = nums[0] + nums[mid] + nums[right];
  let closest = currentSum;
  
  nums.sort(function(a,b) {return a - b;});
  
  for(var left = 0 ; left < nums.length - 1; left++) {
    mid = left + 1;
    right = nums.length - 1;
      
    while(mid < right) {
      currentSum = nums[left] + nums[mid] + nums[right];
          
      if(Math.abs(target - currentSum) < Math.abs(target - closest)) {
        closest = currentSum;
      }
          
      if(currentSum > target) {
        right--;
      } else {
        mid++;
      }
    }
  }
  
  return closest;
};

module.exports.threeSumClosest = threeSumClosest;