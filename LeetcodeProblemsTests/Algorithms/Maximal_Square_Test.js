const assert = require('assert');
const maximalSquare = require('../../LeetcodeProblems/Algorithms/Maximal_Square').maximalSquare;

function test() {
  assert.equal(maximalSquare([["1","0"]]), 1);
  assert.equal(maximalSquare([["1"]]), 1);
  assert.equal(maximalSquare([["0"]]), 0);
  assert.equal(
    maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]),
    4
  );
}

module.exports.test = test;
