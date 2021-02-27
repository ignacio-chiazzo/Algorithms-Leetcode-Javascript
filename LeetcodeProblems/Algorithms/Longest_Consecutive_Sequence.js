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

module.exports.longestConsecutive = longestConsecutive;
