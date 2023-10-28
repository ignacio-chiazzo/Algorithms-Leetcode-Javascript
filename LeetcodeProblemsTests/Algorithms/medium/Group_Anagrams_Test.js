const assert = require("assert");
const groupAnagrams = require("../../../LeetcodeProblems/Algorithms/medium/Group_Anagrams").groupAnagrams;

function test() {
  assert.deepEqual(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]),
    [ [ "eat", "tea", "ate" ], [ "tan", "nat" ], [ "bat" ] ]
  );
}

module.exports.test = test;
