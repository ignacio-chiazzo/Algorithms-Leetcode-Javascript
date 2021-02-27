const assert = require('assert');
const numTrees1 = require('../../LeetcodeProblems/Algorithms/Unique_Binary_Search_Trees').numTrees1;
const numTrees2 = require('../../LeetcodeProblems/Algorithms/Unique_Binary_Search_Trees').numTrees2;
const numTrees3 = require('../../LeetcodeProblems/Algorithms/Unique_Binary_Search_Trees').numTrees3;

var test = function () {
  assert.strictEqual(numTrees1(1), 1);
  assert.strictEqual(numTrees1(2), 2);
  assert.strictEqual(numTrees1(3), 5);
  assert.strictEqual(numTrees1(5), 42);

  assert.strictEqual(numTrees2(1), 1);
  assert.strictEqual(numTrees2(2), 2);
  assert.strictEqual(numTrees2(3), 5);
  assert.strictEqual(numTrees2(5), 42);

  assert.strictEqual(numTrees3(1), 1);
  assert.strictEqual(numTrees3(2), 2);
  assert.strictEqual(numTrees3(3), 5);
  assert.strictEqual(numTrees3(5), 42); 
}

module.exports.test = test;
