const assert = require('assert');
const { maxAreaOfIsland } = require('../../LeetcodeProblems/Algorithms/Max_Area_Of_Island');

function test1() {
  var matrix = [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
  ]

  assert.strictEqual(maxAreaOfIsland(matrix), 6);
}

function test2() {
  var matrix = [
    [0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 1, 1, 0, 1],
    [0, 0, 0, 0, 0],
  ]

  assert.strictEqual(maxAreaOfIsland(matrix), 5);
}

function test3() {
  var matrix = [
    [0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ]

  assert.strictEqual(maxAreaOfIsland(matrix), 11);
}

function test() {
  test1();
  test2();
  test3();
}

module.exports.test = test
