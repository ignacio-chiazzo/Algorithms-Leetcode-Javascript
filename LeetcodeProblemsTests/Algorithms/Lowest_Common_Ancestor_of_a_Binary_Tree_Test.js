const assert = require('assert');
var TreeNode = require('../../UtilsClasses/TreeNode').TreeNode;
const lowestCommonAncestor = require('../../LeetcodeProblems/Algorithms/Lowest_Common_Ancestor_of_a_Binary_Tree').lowestCommonAncestor;
const lowestCommonAncestor2 = require('../../LeetcodeProblems/Algorithms/Lowest_Common_Ancestor_of_a_Binary_Tree').lowestCommonAncestor2;

var test = function() {
  var root = new TreeNode(3);

  var right = new TreeNode(1);
  right.left = new TreeNode(0);
  right.right = new TreeNode(8);
  root.right = right;

  var left = new TreeNode(5);
  left.left = new TreeNode(6);
  
  var tempRight = new TreeNode(2);
  tempRight.left = new TreeNode(7);
  tempRight.right = new TreeNode(4);
  left.right = tempRight;

  root.left = left;

  //         _______3______
  //        /              \
  //     ___5__          ___1__
  //    /      \        /      \
  //    6      _2       0       8
  //          /  \
  //          7   4

  console.log(lowestCommonAncestor(root, left, tempRight.right));
  console.log(lowestCommonAncestor(root, left, right));

  console.log(lowestCommonAncestor2(root, left, tempRight.right));
  console.log(lowestCommonAncestor2(root, left, right));
}

module.exports.test = test;
