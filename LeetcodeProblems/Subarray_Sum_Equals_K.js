
/*
Subarray Sum Equals K
https://leetcode.com/problems/subarray-sum-equals-k/

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 // Solution 1
var subarraySum = function(nums, k) {
  var ret = 0;
  for(var i = 0; i < nums.length; i++) {
    var count = 0;
    for(var j = i; j < nums.length; j++) {
      count += nums[j];
      if(count === k)
        ret++;
    }
  }
  
  return ret;
};


// Solution 2
var subarraySum2 = function(nums, k) {
  if(nums.length === 0)
    return 0;
  
  var sums = [];
  sums[0] = 0;
  var count = 0;
  for(var i = 0; i < nums.length; i++) {
    count += nums[i];
    sums[i + 1] = count;
  }
  
  var ret = 0; 
  for(var i = 0; i < sums.length - 1; i++) {
    for(var j = i + 1; j < sums.length; j++) {
      if(sums[j] - sums[i] === k)
        ret++;
    }
  }
  
  return ret;
};

module.exports.subarraySum = subarraySum;
