/*
Linked List Cycle
https://leetcode.com/problems/linked-list-cycle-ii/description/

Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Note: Do not modify the linked list.

Follow up:
Can you solve it without using extra space?
*/

var ListNode = require('../UtilsClasses/ListNode').ListNode;

// Optimal solution
/**
* @param {ListNode} head
* @return {ListNode}
*/
var detectCycle = function(head) {
  if (head === null)
    return null;

  var slow = head;
  var fast = head;

  while(fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if(fast == slow) {
      var a = head;
      var b = slow;
      while(a !== b) {
        a = a.next;
        b = b.next;
      }
      return a;
    }
  }
  return null;
};

// Naiver solution using a Set
var detectCycle2 = function(head) {
  if(head === null || head.next === null) {
    return null;
  }
  var setNodes = new Set();
  var iter = head;
  while(iter !== null) {
    if(setNodes.has(iter)) {
      return iter;
    }
    setNodes.add(iter);
    iter = iter.next
  }
  return null;
};

var main = function() {
  test();
}

var test = function() {
  const cycle = buildCycle();
  var list = cycle.list;
  var nodeCycle = cycle.nodeCycle;
  assert.equal(detectCycle(list), nodeCycle);
}

function buildCycle() {
  var node1 =  ListNode.linkenList([1,2,3,4,5]);
  var node2 =  new ListNode(2);
  var node3 =  new ListNode(3);
  var node4 =  new ListNode(4);
  var node5 =  new ListNode(5);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node2;

  return {
    list: node1,
    nodeCycle: node2,
  };
}

module.exports.main = main;
