const assert = require('assert');
var ListNode = require('../../UtilsClasses/ListNode').ListNode;
const detectCycle = require('../../LeetcodeProblems/Algorithms/Linked_List_Cycle_II').detectCycle;

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

module.exports.test = test;
