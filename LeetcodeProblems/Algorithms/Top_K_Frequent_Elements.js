/*
Top K Frequent Elements
https://leetcode.com/problems/top-k-frequent-elements/description/

Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.


Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]


Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1) 1 <= nums.length <= 10^5
2) -10^4 <= nums[i] <= 10^4
3) k is in the range [1, the number of unique elements in the array].
4) It is guaranteed that the answer is unique.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];
  
  for(let num of nums) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  
  for(let [num, freq] of freqMap) {
      bucket[freq] = (bucket[freq] || new Set()).add(num);
  }
  
  for(let i = bucket.length-1; i >= 0; i--) {
      if(bucket[i]) result.push(...bucket[i]);
      if(result.length === k) break;
  }
  return result;
};

module.exports.topKFrequent = topKFrequent;
