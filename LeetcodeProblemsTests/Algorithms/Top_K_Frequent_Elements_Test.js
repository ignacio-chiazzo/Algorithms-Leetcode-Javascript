const assert = require("assert");
const topKFrequent = require("../../LeetcodeProblems/Algorithms/Top_K_Frequent_Elements").topKFrequent;

var test = function () {
  assert.deepEqual(topKFrequent([1,1,1,2,2,3], 2).sort(), [1,2]);
  assert.deepEqual(topKFrequent([7,8,9,8,9,8], 2).sort(), [8,9]);
  assert.deepEqual(topKFrequent([1,1,1,1], 1).sort(), [1]);
};

module.exports.test = test;
