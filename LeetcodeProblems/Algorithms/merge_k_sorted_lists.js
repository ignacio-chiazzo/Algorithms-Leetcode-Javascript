/*
Merge k Sorted Lists
https://leetcode.com/problems/merge-k-sorted-lists/

Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
*/

const ListNodeTestHelper = require('../../utilsClasses/ListNodeTestHelper');

var ListNode = require('../../utilsClasses/ListNode').ListNode;

var mergeKLists = function(lists) {
  if(lists.length === 0)
    return null;
  
  var queue = [];
  for(var i = 0; i < lists.length; i++) 
    queue.push(lists[i]);
  
  while(queue.length > 1) {
    list1 = queue.shift();
    list2 = queue.shift();
    queue.push(mergeLists(list1, list2));
  }
  
  return queue.shift();
};

var mergeLists = function(list1, list2) {
  if(list1 === null) {
    return list2;
  } else if(list2 === null) 
    return list1;
    
  var iter1 = list1;
  var iter2 = list2;  
  var head;
  
  if(iter1.val < iter2.val) {
    head = iter1;
    iter1 = iter1.next
  } else {
    head = iter2;
    iter2 = iter2.next;
  }

  var iterHead = head;
  while(iter1 !== null && iter2 !== null) {
    if(iter1.val < iter2.val) {
      iterHead.next = iter1;
      iter1 = iter1.next;
    } else {
      iterHead.next = iter2;
      iter2 = iter2.next;
    }
    iterHead = iterHead.next;
    iterHead.next = null;
  }
  
  if(iter1 !== null) {
    iterHead.next = iter1;
  } else if(iter2 !== null) {
    iterHead.next = iter2;
  }
  
  return head;
}

module.exports.mergeKLists = mergeKLists;
