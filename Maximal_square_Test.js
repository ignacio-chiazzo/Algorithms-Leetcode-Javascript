const assert = require('assert');
const {Maximalsquare } = require('../LeetcodeProblems/Maximal_square');

function test1() {
  var matrix = [
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1 1],
    [1, 0, 0, 1, 0],
  ]

  assert.strictEqual(Maximalsquare(matrix), 4);
}

function test2() {
  var matrix = [
    [0, 1],
    [1,0]
  ]

  assert.strictEqual(Maximalsquare(matrix), 1);
}

function test3(){
  var matrix = [
    [0]
    ]
   assert.strictEqual(Maximalsquare(matrix), 0);
}
  
function test() {
  test1();
  test2();
  test3();
}

module.exports.test = test
