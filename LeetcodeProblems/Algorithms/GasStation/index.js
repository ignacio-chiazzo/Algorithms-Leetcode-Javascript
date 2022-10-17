/**
 * Problem: https://leetcode.com/problems/gas-station/description/
 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  var gasSum =0, costSum = 0;
  var len = gas.length;
  var result = 0;

  for (var i = 0; i < len; ++i) {
    gasSum += gas[i];
    costSum += cost[i];
  }

  if (costSum > gasSum)
    return -1;
  else {
    gasSum = costSum = 0;
    for (var i = 0; i < len; ++i) {
      gasSum += gas[i];
      costSum += cost[i];
      if (costSum > gasSum) {
        gasSum = 0;
        costSum = 0;
        result = i + 1;
      }
    }
  }

  return result;
};
module.exports = canCompleteCircuit;
