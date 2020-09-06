
/*
Unique Binary Search Trees
https://leetcode.com/problems/unique-binary-search-trees/description/

Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
   

DP Solution: https://www.programcreek.com/2014/05/leetcode-unique-binary-search-trees-java/
*/

// Solution 3 using DP
var numTrees3 = function (n) {
  if (n == 0)
    return 0

  var map = [];
  map[0] = 1;
  map[1] = 1;

  for(var i = 2; i <= n; i++) {
    var currentI = 0;
    for(var j = 0; j < i; j++) {
      currentI += map[j] * map[i - j - 1];
    }
    map[i] = currentI;
  }

  return map[n];
}

// Solution 2 (Solution 1 + Memoization)
var numTrees2 = function(n) {
  var memo = {};
  return numTreesAux2(1, n, memo);
};

var numTreesAux2 = function(leftMin, leftMax, memo) {
  const keyMemo = buildKey(leftMin, leftMax);
  if(memo[keyMemo])
    return memo[keyMemo] 

  if(leftMin > leftMax)
    return 0;
  
  if(leftMin === leftMax) 
    return 1;
  
  var count = 0;
  for(var i = leftMin; i <= leftMax; i++){  
    const left = numTreesAux2(leftMin, i - 1, memo);
    const right = numTreesAux2(i + 1, leftMax, memo);  
    
    if(left > 0 && right > 0) {
      count += left * right; 
    } else {
      count += (left > 0) ? left : right;
    }
  } 
  
  memo[keyMemo] = count;
  return count;
}

var buildKey = function(a, b) {
  return a + "-" + b;
}


// Solution 1
var numTrees1 = function(n) {
  return numTreesAux1(1, n);
};

var numTreesAux1 = function(leftMin, leftMax) {
  if(leftMin > leftMax)
    return 0;
  
  if(leftMin === leftMax) 
    return 1;
  
  var count = 0;
  for(var i = leftMin; i <= leftMax; i++){  
    const left = numTreesAux1(leftMin, i - 1);
    const right = numTreesAux1(i + 1, leftMax);  
    
    if(left > 0 && right > 0) {
      count += left * right; 
    } else {
      count += (left > 0) ? left : right;
    }
  } 
  
  return count;
}

module.exports.numTrees1 = numTrees1;
module.exports.numTrees2 = numTrees2;
module.exports.numTrees3 = numTrees3;
