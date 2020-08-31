const assert = require('assert');

var test = function () {
  var myStack = new MyStack();
  myStack.push(4);
  myStack.push(3);
  myStack.push(2);
  myStack.push(1);
  assert.equal(myStack.pop(), 1);
  assert.equal(myStack.top(), 2);
  myStack.push(1);
  assert.equal(myStack.top(), 1);
  assert.equal(myStack.pop(), 1);
  assert.equal(myStack.pop(), 2);
  assert.equal(myStack.pop(), 3);
}

module.exports.test = test;
