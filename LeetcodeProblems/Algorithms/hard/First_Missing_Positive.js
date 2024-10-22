/*
41. First Missing Positive
https://leetcode.com/problems/first-missing-positive/
Problem:
Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
Example 1:
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
Example 2:
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
Example 3:
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
Constraints:
1 <= nums.length <= 10^5
-2^31 <= nums[i] <= 2^31 - 1
Explanation
Initialize n
const n = nums.length;
This line sets the variable n to the length of the input array nums. It represents the size of the array.
This is the cyclic sort algorithm. It iterates through the array and, in each step, it checks if the current element nums[i] is within the valid range (1 to n) and not in its correct position. If so, it swaps the element with the one at its correct position.
After the cyclic sort, this loop searches for the first element that is out of place. If nums[i] is not equal to i + 1, it means that i + 1 is the smallest missing positive integer, and it is returned.
Return Next Positive Integer if All Elements Are in Place,
If all elements are in their correct positions, the function returns the next positive integer after the maximum element in the array (n + 1).
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++)
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i])
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];

  for (let i = 0; i < n; i++)
    if (nums[i] !== i + 1)
      return i + 1;

  return n + 1;
};

module.exports.firstMissingPositive = firstMissingPositive;