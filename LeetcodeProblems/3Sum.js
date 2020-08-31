/*
3Sum
https://leetcode.com/problems/3sum/description/

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/
const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var ret = [];
  nums.sort(function(a, b) { return a - b });
  for(var i = 0; i < nums.length; i++) {
      if(i === 0 || i > 0 && nums[i] !== nums[i - 1]) {
          var left = i + 1;
          var right = nums.length - 1;
          while(left < right) {
              const sum = nums[left] + nums[right] + nums[i];
              if(left > i + 1 && nums[left] === nums[left - 1] || sum < 0) {
                  left++
              } else if(right < nums.length - 1 && nums[right] === nums[right + 1] || sum > 0) {
                  right--;
              } else if(sum === 0) { 
                  ret.push([nums[left], nums[right], nums[i]]);
                  left++;
                  right--;   
              }
          } 
      }
  }
  
  return ret;
};

var main = function() {
  test();
}

var test = function () {
  assert.deepEqual(threeSum([]), []);
  assert.deepEqual(threeSum([0]), []);
  assert.deepEqual(threeSum([0, 0]), []);
  assert.deepEqual(
    threeSum([0, 0, 0]), 
    [[0, 0, 0]]
  );
  assert.deepEqual(
    threeSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 
    [[0, 0, 0]]
  );
  assert.deepEqual(
    threeSum([-1, 0, 1, 2, -1, -4]), 
    [ [ -1, 2, -1 ], [ 0, 1, -1 ] ]
  );
}

module.exports.main = main;
