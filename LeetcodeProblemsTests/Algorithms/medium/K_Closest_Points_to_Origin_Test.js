const assert = require("assert");
var kClosest = require("../../../LeetcodeProblems/Algorithms/medium/K_Closest_Points_to_Origin").kClosest;

function test1() {
  var points = [[1,3],[-2,2]];
  var output = [[-2,2]];
  assert.strictEqual(kClosest(points,1), output);
}

function test2() {
  var points = [[3,3],[5,-1],[-2,4]];
  var output = [[-2,4],[3,3]];

  assert.strictEqual(kClosest(points,2), output);
}

function test() {
  test1();
  test2();
}

module.exports.test = test;

