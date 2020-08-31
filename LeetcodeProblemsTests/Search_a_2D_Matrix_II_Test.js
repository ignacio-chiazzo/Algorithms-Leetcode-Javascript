const assert = require('assert');

var test = function() {
  assert.equal(searchMatrix(matrix1, 5), true);
  assert.equal(searchMatrix(matrix1, 0), false);
  assert.equal(searchMatrix(matrix1, 15), true);
}

module.exports.test = test;
