/*
Implement Stack using Queues
URL: https://leetcode.com/problems/implement-stack-using-queues/description/

Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Example:

MyStack stack = new MyStack();

stack.push(1);
stack.push(2);  
stack.top();   // returns 2
stack.pop();   // returns 2
stack.empty(); // returns false
Notes:

You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
*/

class MyStack  {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  };

  push(elem) {
    if(this.q1.length > 0) {
      this.q1.push(elem);
    } else {
      this.q2.push(elem); 
    }
  };

  pop() {
    if(this.q1.length === 0 && this.q2.length === 0)
      return null;

    if(this.q1.length > 0) {
      while(this.q1.length > 1) {
        var elem = this.q1.shift();
        this.q2.push(elem);
      }
      return this.q1.shift();
    } else {
      while(this.q2.length > 1) {
        var elem = this.q2.shift();
        this.q1.push(elem);
      }
      return this.q2.shift();
    }
  };

  top() {
    if(this.q1.length === 0 && this.q2.length === 0)
      return null;

    if(this.q1.length > 0) {
      var elem = this.pop();
      this.q2.push(elem);
      return elem;
    } else {
      var elem = this.pop();
      this.q1.push(elem);
      return elem;
    }
  };

  empty() {
    return this.q1.length == 0 && this.q2.length === 0;
  };
}

module.exports.MyStack = MyStack;