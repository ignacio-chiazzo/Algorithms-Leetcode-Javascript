const assert = require('assert');
const ListNode = require('../UtilsClasses/ListNode').ListNode;
const ListNodeTestHelper = require('../utilsClasses/ListNodeTestHelper');

var test = function () {
  ListNodeTestHelper.assertList(swapPairs(ListNode.linkenList([1,2,3,4])), [2,1,4,3]);
  ListNodeTestHelper.assertList(swapPairs(ListNode.linkenList([])), []);
  ListNodeTestHelper.assertList(swapPairs(ListNode.linkenList([1])), [1]);
  ListNodeTestHelper.assertList(swapPairs(ListNode.linkenList([1,2])), [2, 1]);
}

module.exports.test = test;
