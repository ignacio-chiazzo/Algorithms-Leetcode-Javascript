const assert = require("assert");
const threeSumClosest =
  require("../../LeetcodeProblems/Algorithms/3SumClosest").threeSumClosest;

var test = function () {
  assert.equal(2, threeSumClosest([-1, 2, 1, -4], 1));
  assert.equal(0, threeSumClosest([0, 0, 0], 1));
};

module.exports.test = test;
