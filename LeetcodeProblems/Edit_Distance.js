/*
Edit Distance
https://leetcode.com/problems/edit-distance/

Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character
Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
*/

// Optimal solution
var minDistance = function(word1, word2) {
  var matrix = [];
  for(var i = 0; i <= word1.length; i++) {
    matrix[i] = [];
    for(var j = 0; j <= word2.length; j++) {
      if(i === 0)
        matrix[i][j] = j;
      else if(j === 0)
        matrix[i][j] = i;
      else
        matrix[i][j] = 0;
    }
  };
  
  for(var i = 1; i <= word1.length; i++) {
    for(var j = 1; j <= word2.length; j++) {
      if(word1.charAt(i - 1) === word2.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = 1 + min(
          matrix[i - 1][j - 1],
          matrix[i - 1][j], // add
          matrix[i][j - 1]  // remove
        );   
      }
    }
  }
  
  return matrix[word1.length][word2.length];
};

var min = function(a, b, c) {
  if(a < b) {
    return (a < c) ? a : c;
  }
  return (b < c) ? b : c;
}

//Solution 2
var minDistance2 = function(word1, word2) {
  return minDistanceAux(word1, word2, 0, 0);
}

var minDistanceAux = function(word1, word2, iter1, iter2) {
  if(word1.length === iter1)
    return word2.length - iter2;
  
  if(word2.length === iter2)
    return word1.length - iter1;
  
  if(word1.charAt(iter1) === word2.charAt(iter2))
    return minDistanceAux(word1, word2, iter1 + 1, iter2 + 1);
 
  return 1 + min(
    minDistanceAux(word1, word2, iter1 + 1, iter2 + 1),
    minDistanceAux(word1, word2, iter1, iter2 + 1), // add
    minDistanceAux(word1, word2, iter1 + 1, iter2 ) // delete
  )
};

var min = function(a, b, c) {
  if(a < b)
    return (a < c) ? a : c;
  
  return (b < c) ? b : c;
}

module.exports.minDistance = minDistance;
module.exports.minDistance2 = minDistance2;
