
const assert = require('assert');
var escapeGhosts = require('../../LeetcodeProblems/Algorithms/Escape_The_Ghosts').escapeGhosts;

function test() {
  assert.equal(escapeGhosts([[1, 0], [0, 3]], [0, 1]), true);
  assert.equal(escapeGhosts([[1, 0]], [2, 0]), false);
  assert.equal(escapeGhosts([[2, 0]], [1, 0]), true);
}

module.exports.test = test;
