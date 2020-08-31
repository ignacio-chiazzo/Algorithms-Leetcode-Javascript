const assert = require('assert');

var test = function() {
  assert.deepEqual(
    subsetWithDuplicates([1,2,3]),
    [
      [ 1, 2, 3 ],
      [ 1, 3, 2 ],
      [ 2, 1, 3 ],
      [ 2, 3, 1 ],
      [ 3, 1, 2 ],
      [ 3, 2, 1 ]
    ]
  );
}

module.exports.test = test;
