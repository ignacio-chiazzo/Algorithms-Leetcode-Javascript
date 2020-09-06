/*
Swap Nodes in Pairs
https://leetcode.com/problems/swap-nodes-in-pairs/

Given a linked list, swap every two adjacent nodes and return its head.

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
Note:

Your algorithm should use only constant extra space.
You may not modify the values in the list's nodes, only nodes itself may be changed.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if(head === null || head.next === null)
      return head
  var previous  = null;
  var current   = head;
  var following = (head.next != null) ? head.next.next : null;
  head = head.next;
  
  while(current !== null && current.next !== null) {
      var next = current.next;
      next.next = current; 
      if(previous != null)
          previous.next = next;
      current.next = following;    
      previous = current;
      current = following;
      following = (current !== null && current.next != null) ? current.next.next : null;
  }
  
  return head;
};

module.exports.swapPairs = swapPairs;
