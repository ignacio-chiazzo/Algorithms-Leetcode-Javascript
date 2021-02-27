/*
Construct Binary Tree from Preorder and Inorder Traversal
https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var TreeNode = require('../../UtilsClasses/TreeNode').TreeNode;

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if(preorder === null || inorder === null || preorder.length !== inorder.length)
    return nil;
  
  return buildTreeAux(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

var buildTreeAux = function(preorder, pl, ph, inorder, il, ih) {
  if(pl > ph || il > ih)
    return null;
  
  const rootValue = preorder[pl];
  var countElementsLeft = 0;
  while(inorder[il + countElementsLeft] !== rootValue)
    countElementsLeft++;
    
  var ret = new TreeNode(rootValue);
  ret.left = buildTreeAux(preorder, pl + 1, pl + countElementsLeft, inorder, il, il + countElementsLeft - 1);
  ret.right = buildTreeAux(preorder, pl + countElementsLeft + 1, ph, inorder, il + countElementsLeft + 1, ih);
  
  return ret;
}

module.exports.buildTree = buildTree
