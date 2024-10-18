/*
3216. Lexicographically Smallest String After a Swap
https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/description/

Problem:
Given a string s containing only digits, return the lexicographically smallest string
that can be obtained after swapping adjacent digits in s with the same parity at most once.

Digits have the same parity if both are odd or both are even. For example, 5 and 9, as well as 2 and 4,
have the same parity, while 6 and 9 do not.

Example 1:

Input: s = "45320"

Output: "43520"

Explanation:

s[1] == '5' and s[2] == '3' both have the same parity, and swapping them results in the lexicographically smallest string.

Example 2:

Input: s = "001"

Output: "001"

Explanation:

There is no need to perform a swap because s is already the lexicographically smallest.


Constraints:

2 <= s.length <= 100
s consists only of digits.
*/

/*
Approach:

Checking if the present digit is greater than the next digit, if yes then checking the parity of the digit.
if both have the same parity swap the number. since this operation can be done at max once, break the loop after the first swap.
return the updated number

What is parity of a number?
Parity: the property of an integer of whether it is even or odd

how to check the parity of the number:
- using the & operation on the last bit,
- if (last bit)&1 == 1, means the last bit was 1. means Odd (ex: 3 has a bit representation of 11)
- if (last bit)&1 == 0, means last bit was 0. means Even number ( ex: 2 has a bit representation of 10)

*/


/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function(s) {
  let arr = s.split('').map(Number);

  const getParity = (num) => {
    if(num&1 === 0) return 'even';
    else return 'odd';
  }

  for(let i = 0; i< s.length - 1; i++) {
    if(arr[i] > arr[i+1] && getParity(arr[i]) === getParity(arr[i + 1])) {
      let tmp = arr[i+1];
      arr[i+1] = arr[i];
      arr[i] = tmp;
      break;
    }
  }

  return arr.join('');
};

module.exports.getSmallestString = getSmallestString;