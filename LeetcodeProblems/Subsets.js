/*
Subsets 
https://leetcode.com/problems/subsets/description/

Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

const assert = require('assert');

var subsets = function(nums) {
  var ret = [];
  
  subsetByPosition = function (nums, position, current) {
    if(position == nums.length) {
      return [current];
    }
    var currentRight = current.slice().concat([nums[position]]);
    return subsetByPosition(nums, position + 1, currentRight).concat(subsetByPosition(nums, position + 1, current));
  }
  
  return subsetByPosition(nums, 0, []);
};

function main() {
  test();
}

function test() {
  assert.deepEqual(subsets([]), [[]]);
  assert.deepEqual(subsets([1]), [[1], []]);
  assert.deepEqual(
    subsets([1,2]), 
    [[1, 2], [1], [2], []]
  );
  assert.deepEqual(
    subsets([1, 2, 3]), 
    [[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3], []]
  );
}

module.exports.main = main;
