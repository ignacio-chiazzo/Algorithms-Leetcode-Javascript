/**
Reverse Integer
https://leetcode.com/problems/reverse-integer/

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

 */

/**
 * @param {number} x
 * @return {number}
 */
var reverseInteger = function(x) {
  const sign = x >= 0 ? 1 : -1;
  
  let baseNum = sign * x;
  let builder = 0;
  
  while (baseNum > 0) {
    const digit = baseNum % 10;
    builder = builder * 10 + digit;
    baseNum = (baseNum / 10) | 0;
  }
  
  builder *= sign;
  
  const isWithinRange = (builder >= -Math.pow(2, 31) && builder <= Math.pow(2, 31) - 1);
  
  return isWithinRange ? builder : 0;
};

module.exports.reverseInteger = reverseInteger;