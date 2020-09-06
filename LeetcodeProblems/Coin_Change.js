/*
Coin Change
https://leetcode.com/problems/coin-change/

You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin.
*/

// Solution 3 
var coinChange = function(coins, amount) {
  var memo = [];
  for(var i = 0; i <= amount; i++)
    memo[i] = Number.POSITIVE_INFINITY;

  memo[0] = 0;
  for(var i = 0; i < coins.length; i++) {
    const coin = coins[i];
    for(var j = coin; j < memo.length; j++)
      memo[j] = min2(memo[j], memo[j - coin] + 1);
  }

  return (memo[amount] == Number.POSITIVE_INFINITY) ? -1 : memo[amount];
};

var min2 = function(a, b) {
  return (a < b) ? a : b;
}

// Solution 2
var buildMemoKey = function(position, amount) {
  return position + "-" + amount;
}

var coinChange2 = function(coins, amount) {
  var memo = {};
  var solution = coinChangeAux2(coins, amount, 0, memo, Number.POSITIVE_INFINITY);
  return solution == Number.POSITIVE_INFINITY ? -1 : solution;
};

var coinChangeAux2 = function(coins, amount, pos, memo) {
  var key = buildMemoKey(pos, amount);
  if(memo[key])
    return memo[key];
    
  if(amount < 0) {
    return Number.POSITIVE_INFINITY; 
  } else if(amount == 0) {
    return 0;
  } else if(pos >= coins.length) {
    return Number.POSITIVE_INFINITY;
  }
  
  var left = coinChangeAux2(coins, amount, pos + 1, memo);
  var middle = 1 + coinChangeAux2(coins, amount - coins[pos], pos + 1, memo);
  var right = 1 + coinChangeAux2(coins, amount - coins[pos], pos, memo);
  
  var solution = min(left, middle, right);
  memo[key] = solution;
  return solution;
}

// Solution 1 naive
var coinChange1 = function(coins, amount) {
  var solution = coinChangeAux1(coins, amount, 0);
  return solution == Number.POSITIVE_INFINITY ? -1 : solution;
};

var coinChangeAux1 = function(coins, amount, pos) {
  if(amount < 0) {
    return Number.POSITIVE_INFINITY; 
  } else if(amount == 0) {
    return 0;
  } else if(pos >= coins.length) {
    return Number.POSITIVE_INFINITY;
  }
  
  var left = coinChangeAux1(coins, amount, pos + 1);
  var middle = 1 + coinChangeAux1(coins, amount - coins[pos], pos + 1);
  var right = 1 + coinChangeAux1(coins, amount - coins[pos], pos);
  
  var partialSol = min(left, middle, right);
  return partialSol;
}

var min = function(a, b, c) {
  if(a < b) 
    return (a < c) ? a : c;
  return (b < c) ? b : c;
}

module.exports.coinChange = coinChange;
