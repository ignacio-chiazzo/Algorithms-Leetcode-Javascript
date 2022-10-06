const assert = require('assert');
const isHappy = require('../../LeetcodeProblems/Algorithms/Happy_Number').isHappy;

var test = function () {
  assert.equal(isHappy(19),true);
  assert.equal(isHappy(2),false);
}

module.exports.test = test;