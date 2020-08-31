const assert = require('assert');

function test() {
  assert.deepEqual(subsets([]), [[]]);
  assert.deepEqual(subsets([1]), [[1], []]);
  assert.deepEqual(
    subsets([1,2]), 
    [[1, 2], [1], [2], []]
  );
  assert.deepEqual(
    subsets([1, 2, 3]), 
    [[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3], []]
  );
}

module.exports.test = test;
