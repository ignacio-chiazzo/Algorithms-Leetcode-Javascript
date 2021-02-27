const assert = require('assert');
var buildTree = require('../../LeetcodeProblems/Algorithms/Construct_Binary_Tree_from_Preorder_and_Inorder_Traversal').buildTree;

function test() {
  // TODO
  console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));
}

module.exports.test = test;
