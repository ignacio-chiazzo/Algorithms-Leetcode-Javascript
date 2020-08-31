/*
Number of Segments in a String
https://leetcode.com/problems/number-of-segments-in-a-string/description/

Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.

Example:

Input: "Hello, my name is John"
Output: 5
*/
const assert = require('assert');

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  var count = 0;
  var i = 0;

  while(i < s.length) {
    if(s[i] !== " ") {
      count++;
      while(i < s.length && s[i] !== " ")
        i++;
    }
    i++;
  }
  
  return count;
};

function main() {
  test();
}

function test() {
  assert.equal(countSegments(" "), 0);
  assert.equal(countSegments("    "), 0);
  assert.equal(countSegments("ab cd ef"), 3);
  assert.equal(countSegments("  ab cd ef"), 3);
  assert.equal(countSegments("ab cd ef  "), 3);
  assert.equal(countSegments(" ab cd ef "), 3);
}

module.exports.main = main
