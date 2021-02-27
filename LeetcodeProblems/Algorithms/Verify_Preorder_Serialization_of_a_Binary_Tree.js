/*
Verify Preorder Serialization of a Binary Tree
https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/

One way to serialize a binary tree is to use pre-order traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as #.

     _9_
    /   \
   3     2
  / \   / \
 4   1  #  6
/ \ / \   / \
# # # #   # #
For example, the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#", where # represents a null node.

Given a string of comma separated values, verify whether it is a correct preorder traversal serialization of a binary tree. Find an algorithm without reconstructing the tree.

Each comma separated value in the string must be either an integer or a character '#' representing null pointer.  

You may assume that the input format is always valid, for example it could never contain two consecutive commas such as "1,,3".

Example 1:

Input: "9,3,4,#,#,1,#,#,2,#,6,#,#"
Output: true
Example 2:
Input: "1,#"
Output: false
Example 3:

Input: "9,#,#,1"
Output: false
*/


/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  if(preorder.length === 0)
    return true;

  if(preorder.charAt(0) === "#")
    return preorder.length === 1;

  var countP = 2;
  var iter = 1;
  while(iter <= preorder.length && preorder.charAt(iter - 1) !== ",")
    iter++;

  while(countP > 0 && iter < preorder.length) {
    if(preorder.charAt(iter) === "#") {
      countP--;
      iter += 2;
    } else {
      countP++;
      iter += 2;
      while(iter <= preorder.length && preorder.charAt(iter - 1) !== ",")
        iter++;
    }
  }

  return countP === 0 && iter >= preorder.length;    
};

module.exports.isValidSerialization = isValidSerialization;
