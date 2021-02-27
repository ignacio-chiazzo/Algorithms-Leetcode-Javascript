const assert = require('assert');
const setZeroes = require('../../LeetcodeProblems/Algorithms/Set_Matrix_Zeroes').setZeroes;

var test = function() {
  assert.deepEqual(
    setZeroes([[1,1,1],[1,0,1],[1,1,1]]),
    [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
  );
}

module.exports.test = test;
