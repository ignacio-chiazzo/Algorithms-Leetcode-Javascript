/**
 * Problem: https://leetcode.com/problems/gas-station/description/
 */
/*
There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station.
You begin the journey with an empty tank at one of the gas stations.
Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, 
otherwise return -1.
If there exists a solution, it is guaranteed to be unique

Example 1:

Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3

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
    for (i = 0; i < len; ++i) {
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
