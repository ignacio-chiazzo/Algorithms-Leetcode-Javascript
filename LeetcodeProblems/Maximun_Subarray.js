/*
Maximum Subarray
https://leetcode.com/problems/maximum-subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

*/

var maxSubArray = function(nums) {
  if(nums.length == 0) 
    return 0;
  var maxSub = nums[0];
  var currentMax = nums[0];
  
  for(var i = 1; i < nums.length; i++) {
    currentMax = max(nums[i], currentMax + nums[i]);
    if(currentMax > maxSub)
      maxSub = currentMax;
  }

  return maxSub;
};

var max = function(i, j) {
  return (i > j) ? i : j;
}

var main = function() {
  console.log(maxSubArray([]));
  console.log(maxSubArray([-4]));
  console.log(maxSubArray([2]));
  console.log(maxSubArray([4,1,-1,4,5,6,7,-200]));
}

module.exports.main = main;