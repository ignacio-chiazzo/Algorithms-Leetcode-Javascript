source:
  - https://leetcode.com/problems/binary-tree-inorder-traversal/
level:
  - medium
description:
  - Given a binary tree, return the inorder traversal of its nodes' values.
tags:
  - Hash Table
  - Stack
  - Tree
solutions:
  -
    - runtime: ms, beats %
    - memory:  MB, beats %
---
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversalInterativeWithHelper = function(root) {
  const result = [] ;
  helper(root,result)
  return result
};

const helper = (root, result) => {
  if (root) {
    helper(root.left, result )
    result.push(root.val)
    helper(root.right, result )
  }
}

module.exports = {
	inorderTraversalInterativeWithHelper
};
