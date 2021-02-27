const assert = require('assert');
const coinChange = require('../../LeetcodeProblems/Algorithms/Coin_Change').coinChange;

function test() {
  assert.equal(coinChange([], 3), -1);
  assert.equal(coinChange([2], 3), -1);
  assert.equal(coinChange([1, 2, 5], 11), 3);
  assert.equal(coinChange([3, 7, 405, 436], 8839), 25);
  assert.equal(coinChange([370, 417, 408, 156, 143, 434, 168, 83, 177, 280, 117], 9953), 24);
}

module.exports.test = test;
