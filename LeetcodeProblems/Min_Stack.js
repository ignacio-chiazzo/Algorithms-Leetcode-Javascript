/*
Min Stack

https://leetcode.com/problems/min-stack/description/

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/


class MinStack {
  constructor() {
    this.minStack = [];
    this.stack = [];
    this.countStack = 0;
    this.countMinStack = 0;
  }

  push(value) {
    if(this.countStack === this.stack.length)
      this.stack.push(value);
    else 
      this.stack[this.countStack] = value;
    this.countStack++;
    
    const min = this.getMin();
    if(min === null || min >= value) {
      if(this.countMinStack === this.minStack.length)
        this.minStack.push(value);
      else 
        this.minStack[this.countMinStack] = value;
      this.countMinStack++;
    }
  }

  pop() {
    if(this.countStack === 0)
      return null;

    var elem = this.stack[this.countStack - 1];
    this.countStack--;
    
    if(elem === this.minStack[this.countMinStack - 1])
      this.countMinStack--;

    return elem;
  }

  top() {
    if(this.countStack === 0)
      return null;
    
    return this.stack[this.countStack - 1];
  }

  getMin() {
    if(this.countMinStack === 0)
      return null;

    return this.minStack[this.countMinStack - 1]
  }
}

module.exports.MinStack = MinStack;
