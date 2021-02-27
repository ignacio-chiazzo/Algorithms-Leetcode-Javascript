const assert = require('assert');
const restoreIpAddresses = require('../../LeetcodeProblems/Algorithms/Restore_IP_Addresses').restoreIpAddresses;

var test = function() {
  assert.deepEqual(restoreIpAddresses("010010"), [ '0.10.0.10', '0.100.1.0']);
  assert.deepEqual(restoreIpAddresses("25525511135"), [ '255.255.11.135', '255.255.111.35' ]);
}

module.exports.test = test;
