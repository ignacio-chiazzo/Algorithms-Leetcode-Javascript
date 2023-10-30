const assert = require("assert");
const restoreString = require("../../../LeetcodeProblems/Algorithms/easy/Shuffle_String").restoreString;

var test = function () {
  assert.equal(restoreString("codeleet",[4,5,6,7,0,2,1,3]),"leetcode");
  assert.equal(restoreString("abc",[0,1,2]),"abc");
  assert.equal(restoreString("hacktoberfest",[9,10,11,12,4,5,6,7,8,0,1,2,3]),"festtoberhack");
};

module.exports.test = test;