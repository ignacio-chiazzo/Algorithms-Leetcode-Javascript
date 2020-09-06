/* 
Search in Rotated Sorted Array
https://leetcode.com/problems/search-in-rotated-sorted-array/

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  return searchAux(nums, target, 0, nums.length -1);
};

var searchAux = function(nums, target, start, end) {
  if (start > end)
    return - 1;
  var middle =  Math.trunc((start + end) /2);
  
  if(nums[middle] == target) {
    return middle;
  }
  
  if(nums[middle] < nums[nums.length - 1]) { // right part sorted
    if(nums[middle] < target && nums[nums.length - 1] >= target) {
      return searchAux(nums, target, middle + 1, end);
    }
    return searchAux(nums, target, start, middle - 1);
  } else { // left part sorted
    if(nums[0] <= target && nums[middle] > target) {
      return searchAux(nums, target, start, middle - 1);
    }
    return searchAux(nums, target, middle + 1, end);
  }
}

module.exports.search = search;
