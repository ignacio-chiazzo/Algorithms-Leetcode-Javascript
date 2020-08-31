const assert = require('assert');

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
