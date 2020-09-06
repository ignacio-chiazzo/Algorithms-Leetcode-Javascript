/*
Deletion Distance
The deletion distance of two strings is the minimum number of characters you need to delete in the two strings in order to get the same string. For instance, the deletion distance between "heat" and "hit" is 3:

By deleting 'e' and 'a' in "heat", and 'i' in "hit", we get the string "ht" in both cases.
We cannot get the same string from both strings by deleting 2 letters or fewer.
Given the strings str1 and str2, write an efficient function deletionDistance that returns the deletion distance between them. Explain how your function works, and analyze its time and space complexities.

input:  str1 = "dog", str2 = "frog"
output: 3

input:  str1 = "some", str2 = "some"
output: 0

input:  str1 = "some", str2 = "thing"
output: 9

input:  str1 = "", str2 = ""
output: 0
*/

// Solution 3 Using DP
var deletionDistanceDP = function(str1, str2) {
  if(str1.length === 0)
    return str2.length;
  if(str2.length === 0)
    return str1.length;

  var matrix = [];
  for(var i = 0; i <= str1.length; i++) {
    matrix[i] = [];
    for(var j = 0; j <= str2.length; j++) {
      if(i === 0) {
        matrix[i][j] = j;
      } else if(j == 0) {
        matrix[i][j] = i;
      } else if(str1[i - 1] === str2[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = 1 + min(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }
  
  return matrix[str1.length][str2.length];
}

// Solution 2  Using memoization
var deletionDistance2 = function(str1, str2) {
  var memo = {};
  return deletionDistanceAux2(str1, str2, 0, 0, memo);
}

var deletionDistanceAux2 = function(str1, str2, pos1, pos2, memo) {
  const valueCashed = getValue(pos1, pos2, memo);
  if(valueCashed !== undefined)
    return valueCashed;
  var result;

  if(str1.length === pos1)
    result = str2.length - pos2;
  else if(str2.length === pos2)
    result = str1.length - pos1;
  else if(str1[pos1] === str2[pos2])
    result = deletionDistanceAux2(str1, str2, pos1 + 1, pos2 + 1, memo);
  else 
    result = 1 + min(deletionDistanceAux2(str1, str2, pos1, pos2 + 1, memo), deletionDistanceAux2(str1, str2, pos1 + 1, pos2, memo))

  return setValue(pos1, pos2, result, memo);
}

var getMemoKey = function(pos1, pos2) {
  return pos1 + "-" + pos2;
}

var getValue = function(pos1, pos2, memo) {
  const memoKey = getMemoKey(pos1, pos2);
  return memo[memoKey];
}

var setValue = function(pos1, pos2, value, memo) {
  const memoKey = getMemoKey(pos1, pos2);
  memo[memoKey] = value;
  return value;
}

// Solution 1 naive
var deletionDistance = function(str1, str2) {
  return deletionDistanceAux(str1, str2, 0, 0);
}

var deletionDistanceAux = function(str1, str2, pos1, pos2) {
  if(str1.length === pos1)
    return str2.length - pos2;
  
  if(str2.length === pos2)
    return str1.length - pos1;
  
  if(str1[pos1] === str2[pos2]) 
    return deletionDistanceAux(str1, str2, pos1 + 1, pos2 + 1);

  return 1 + min(deletionDistanceAux(str1, str2, pos1, pos2 + 1), deletionDistanceAux(str1, str2, pos1 + 1, pos2));
}

var min = function(a, b) {
  return (a < b) ? a : b;
}

module.exports.deletionDistance = deletionDistance;
module.exports.deletionDistance2 = deletionDistance2;
module.exports.deletionDistanceDP = deletionDistanceDP;
