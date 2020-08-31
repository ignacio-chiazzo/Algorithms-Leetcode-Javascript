const assert = require('assert');

var test = function() {
  assert.deepEqual(
    setZeroes([[1,1,1],[1,0,1],[1,1,1]]),
    [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
  );
}

module.exports.test = test;
