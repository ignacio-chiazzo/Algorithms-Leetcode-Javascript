const assert = require('assert');
const ListNodeTestHelper = require('../../UtilsClasses/ListNodeTestHelper');
var ListNode = require('../../UtilsClasses/ListNode').ListNode;
const mergeKLists = require('../../LeetcodeProblems/Algorithms/merge_k_sorted_lists').mergeKLists;

function test() {
  assert.deepEqual(mergeKLists([]), null);
  assert.deepEqual(
    mergeKLists([null]), 
    null
  );
  assert.deepEqual(
    mergeKLists([null, null]), 
    null
  );

  var list1 = ListNode.linkenList([1,2,3]);
  var list2 = ListNode.linkenList([2,3,4]);
  var list3 = ListNode.linkenList([5,6]);
  var list4 = ListNode.linkenList([1,5]);
  ListNodeTestHelper.assertList(
    mergeKLists([list1, list2, list3, list4]),
    [1, 1, 2, 2, 3, 3, 4, 5, 5, 6]
  );
}

module.exports.test = test;
