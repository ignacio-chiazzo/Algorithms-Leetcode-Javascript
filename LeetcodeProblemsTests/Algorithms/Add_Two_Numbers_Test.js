const assert = require('assert');
const addTwoNumbers = require('../../LeetcodeProblems/Algorithms/Add_Two_Numbers').addTwoNumbers;
const ListNodeTestHelper = require('../../UtilsClasses/ListNodeTestHelper');
var ListNode = require('../../UtilsClasses/ListNode').ListNode;

function test() {
  const list1 = ListNode.linkenList([1,2,3,4]);
  const list2 = ListNode.linkenList([1,2,3,4]);
  ListNodeTestHelper.assertList(
    addTwoNumbers(list1, list2),
    [2, 4, 6, 8]
  );

  const list3 = ListNode.linkenList([1]);
  const list4 = ListNode.linkenList([1,2]);
  ListNodeTestHelper.assertList(
    addTwoNumbers(list3, list4),
    [2, 2]
  );

  const list5 = ListNode.linkenList([]);
  const list6 = ListNode.linkenList([1,2]);
  ListNodeTestHelper.assertList(
    addTwoNumbers(list5, list6),
    [1, 2]
  );
}

module.exports.test = test;
