/*
Symmetric Tree
https://leetcode.com/problems/symmetric-tree/description/

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(root === null)
    return true; 
  return isSymetricAux(root.left, root.right);
};

var isSymetricAux = function(root1, root2) {
  if(root1 === null)
    return root2 === null;
  
  if(root2 === null || root1.val !== root2.val) {
    return false;
  }
  
  return isSymetricAux(root1.left, root2.right) && isSymetricAux(root1.right, root2.left);
}
