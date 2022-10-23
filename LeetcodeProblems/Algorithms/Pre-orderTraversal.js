// Binary Tree Preorder Traversal
// https://leetcode.com/problems/binary-tree-preorder-traversal/

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,2,3]

var preorderTraversal = function(root) {
    if(!root){
        return [];
    }
    let arr = [];
    function dfs(node){
        arr.push(node.val);
        node.left && dfs(node.left);
        node.right && dfs(node.right);
    }
    dfs(root);
    return arr;
};
