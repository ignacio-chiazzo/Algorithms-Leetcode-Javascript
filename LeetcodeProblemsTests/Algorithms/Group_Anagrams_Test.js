const assert = require('assert');
const groupAnagrams = require('../../LeetcodeProblems/Algorithms/Group_Anagrams').groupAnagrams;

function test() {
  assert.deepEqual(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]),
    [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
  )
}

module.exports.test = test;
