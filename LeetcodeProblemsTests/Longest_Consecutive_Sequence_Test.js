/*
Longest Consecutive Sequence
https://leetcode.com/problems/longest-consecutive-sequence/

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/
const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if(nums.length === 0) 
    return 0;
  var setNums = new Set();
  for(var i = 0; i < nums.length; i++)
    setNums.add(nums[i]);
  
  var cons = 1;
  var currentCons = 1;
  for(var i = 0; i < nums.length; i++) {
    var number = nums[i];
    if(setNums.has(number)) {
      setNums.delete(number);
      
      var prevNum = number - 1;
      while(setNums.has(prevNum)){
        currentCons++;
        setNums.delete(prevNum);
        prevNum--;
      }
      
      var nextNum = number + 1;
      while(setNums.has(nextNum)){
        currentCons++;
        setNums.delete(nextNum);
        nextNum++;
      }
      
      if(currentCons > cons)
        cons = currentCons    
    }
    currentCons = 1;
  }
  return cons;
};

var main = function() {
  test();
}

function test() {
  assert.equal(longestConsecutive([100, 1, 200, 3, 2, 400, 201]), 3);
  assert.equal(longestConsecutive([1,2,3,4, 100, 1, 200, 3, 2, 400, 201]), 4);
  assert.equal(longestConsecutive([1, 400, 201, 403, 398]), 1);
  assert.equal(longestConsecutive([]), 0);
  assert.equal(longestConsecutive([2]), 1);
}

module.exports.main
