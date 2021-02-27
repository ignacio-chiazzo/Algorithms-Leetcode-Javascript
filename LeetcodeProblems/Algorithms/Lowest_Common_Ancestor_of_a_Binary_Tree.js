/*
Lowest Common Ancestor of a Binary Tree
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia:
“The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants 
(where we allow a node to be a descendant of itself).”

Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]

        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2       0       8
         /  \
         7   4
Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself
             according to the LCA definition.
Note:

All of the nodes' values will be unique.
p and q are different and both values will exist in the binary tree.
*/


var TreeNode = require('../../UtilsClasses/TreeNode').TreeNode;

// Solution 1
var lowestCommonAncestor = function(root, p, q) {
  if(root === null)
    return root;
  if(p.val === root.val)
    return p;
  if(q.val === root.val)
    return q;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if(left !== null && right !== null)
    return root;
  return left !== null ? left : right;
};

// Solution 2
var lowestCommonAncestor2 = function(root, p, q) {
  var pathToP = pathTo(root, p.val);
  var pathToQ = pathTo(root, q.val);

  if(pathToP.length === 0 || pathToQ === 0)
    return null;

  var iter = 0;
  while(iter < pathToP.length - 1 && iter < pathToQ.length - 1 && pathToP[iter + 1] === pathToQ[iter + 1]) {
    if(root.left !== null && root.left.val === pathToP[iter + 1]) {
      root = root.left;  
    } else {
      root = root.right;  
    }
    iter++;
  }
    
  return root;
};

var pathTo = function(root, value) {
  if(root === null)
    return [];
    
  var list = [root.val];
  if(root.val === value)
    return list;

  const left = pathTo(root.left, value);
  if (left.length > 0)
    return list.concat(left);

  const right = pathTo(root.right, value);    
  if(right.length > 0)
    return list.concat(right);
    
  return [];
}

module.exports.lowestCommonAncestor = lowestCommonAncestor;
module.exports.lowestCommonAncestor2 = lowestCommonAncestor2;
