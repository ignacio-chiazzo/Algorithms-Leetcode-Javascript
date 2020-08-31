const assert = require('assert');

function test() {
  assert.deepEqual(permute([]), [ [] ]);
  assert.deepEqual(permute([1]), [ [ 1 ] ]);
  assert.deepEqual(
    permute([1,2,3]), 
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
