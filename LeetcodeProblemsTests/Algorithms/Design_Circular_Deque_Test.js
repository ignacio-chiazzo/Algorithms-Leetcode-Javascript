const assert = require('assert');
var MyCircularDeque = require('../../LeetcodeProblems/Algorithms/Design_Circular_Deque').MyCircularDeque;

var test =  function() {
  const obj = new MyCircularDeque(3);
  assert.equal(obj.insertLast(1), true);
  assert.equal(obj.insertLast(2), true);
  assert.equal(obj.insertFront(3), true);
  assert.equal(obj.insertFront(4), false);
  assert.equal(obj.getRear(), 2);
  assert.equal(obj.isFull(), true);
  assert.equal(obj.deleteLast(), true);
  assert.equal(obj.insertFront(4), true);
  assert.equal(obj.getFront(), 4);
}

module.exports.test = test;
