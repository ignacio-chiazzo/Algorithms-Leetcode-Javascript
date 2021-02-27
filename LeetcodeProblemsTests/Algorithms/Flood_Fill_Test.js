const assert = require('assert');
const floodFill = require('../../LeetcodeProblems/Algorithms/Flood_Fill').floodFill;

function test() {
  assert.deepEqual(
    [ [ 2, 2, 2 ], [ 2, 2, 0 ], [ 2, 0, 1 ] ],
    floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)
  );
}

module.exports.test = test;
