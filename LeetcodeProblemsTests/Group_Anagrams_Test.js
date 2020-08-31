const assert = require('assert');

function test() {
  assert.deepEqual(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]),
    [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
  )
}

module.exports.test = test;
