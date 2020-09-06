/*
Restore IP Addresses
https://leetcode.com/problems/restore-ip-addresses/description/

Given a string containing only digits, restore it by returning all possible valid IP address combinations.

Example:

Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]
*/

var restoreIpAddresses = function(s) {
  var restore = restoreInputBits("", s, 4);

  var ret = [];
  for(var i = 0; i < restore.length; i++) {
    ret.push(restore[i].join("."));
  }

  return ret;
};

var restoreInputBits = function(partial, s, num) {
  if(s.length == 0 && num == 0 )
    return [partial];
  if(s.length < num || s.length > num * 3 || num == 0) 
    return [];
  
  const oneNum = restoreInputBits([...partial, s.slice(0, 1)], s.slice(1), num - 1);

  if(s.length === 1 || s.slice(0, 1) === "0")
    return oneNum 

  const twoNums = restoreInputBits([...partial, s.slice(0, 2)], s.slice(2), num - 1);
  if(s.length === 2 || s.slice(0, 3) > 255)
    return [...oneNum, ...twoNums] 

  const threeNums = restoreInputBits([...partial, s.slice(0, 3)], s.slice(3), num - 1);
  return [...oneNum, ...twoNums, ...threeNums];
}

module.exports.restoreIpAddresses = restoreIpAddresses;
