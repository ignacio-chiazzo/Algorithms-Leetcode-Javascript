const assert = require('assert');
const numIslands = require('../../LeetcodeProblems/Algorithms/Number_of_Islands').numIslands;

function test() {
  assert.equal(numIslands([[1]]), 1);
  assert.equal(numIslands([]), 0);
  assert.equal(numIslands(
    [
      ["1","1","1","1","0"],
      ["1","1","0","1","0"],
      ["1","1","0","0","0"],
      ["0","0","0","0","0"]
    ],
  ),
  1
  );
}

module.exports.test = test;
