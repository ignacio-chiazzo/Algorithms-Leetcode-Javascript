/*
Kth Largest Element in an Array
https://leetcode.com/problems/kth-largest-element-in-an-array/description/

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  for(var i = Math.floor(nums.length/2) - 1; i >= 0; i--) {
    heapify(nums, nums.length, i);
  }
  
  for(var i = nums.length -1; i >= nums.length - k - 1 && i >= 0; i--) {
    swap(nums, 0, i);
    heapify(nums, i, 0);
  }
  
  return nums[nums.length - k];
}

var heapify = function(nums, length, i) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  
  if(left >= length)
    return;
  
  if(nums[i] < nums[left] && (right >= length || nums[left] > nums[right])) { 
    swap(nums, left, i);
    heapify(nums, length, left);
  } else if(right < length && nums[right] > nums[i]) {
    swap(nums, right, i)
    heapify(nums, length, right)
  }
}

var swap = function(nums, a, b) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

module.exports.findKthLargest = findKthLargest;
