const assert = require('assert');
const MinStack = require('../../LeetcodeProblems/Algorithms/Min_Stack').MinStack;

function test() {
  var minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  assert.equal(minStack.getMin(), -3);
  assert.equal(minStack.pop(), -3);
  assert.equal(minStack.top(), 0);
  assert.equal(minStack.getMin(), -2);
}

module.exports.test = test;
