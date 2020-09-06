/*
Group Anagrams
https://leetcode.com/problems/group-anagrams/description/

Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

var groupAnagrams = function(strs) {
  var ret = [];
  var hashMap = {};
  for(var i = 0; i < strs.length; i++) {
    const elem = strs[i];
    const elemSorted = sortString(strs[i]);
    
    if(hashMap[elemSorted]) {
      hashMap[elemSorted].push(elem);
    } else {
      hashMap[elemSorted] = [elem];
    }
  }

  for(key in hashMap)
    ret.push(hashMap[key]);
  

  return ret;
};

var sortString = function(str) {
  if(str.length === 0)
    return str;
  
  return str.split("").sort().join("");
}

module.exports.groupAnagrams = groupAnagrams;
