const assert = require('assert');
const spiralOrder = require('../../LeetcodeProblems/Algorithms/Spiral_Matrix').spiralOrder;

var test = function() {
  const matrix = [
   [ 1, 2, 3 ],
   [ 4, 5, 6 ],
   [ 7, 8, 9 ]
  ]

  assert.deepEqual(
    spiralOrder(matrix),
    [1, 2, 3, 6, 9, 8, 7, 4, 5]
  )
}

module.exports.test = test;
