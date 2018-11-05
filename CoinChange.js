/*

https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/description/

862. Shortest Subarray with Sum at Least K
Return the length of the shortest, non-empty, contiguous subarray of A with sum at least K.

If there is no non-empty subarray with sum at least K, return -1.

 

Example 1:

Input: A = [1], K = 1
Output: 1
Example 2:

Input: A = [1,2], K = 4
Output: -1
Example 3:

Input: A = [2,-1,2], K = 3
Output: 3
 

Note:

1 <= A.length <= 50000
-10 ^ 5 <= A[i] <= 10 ^ 5
1 <= K <= 10 ^ 9
*/


/*
Tree for solution


                                           [pos, countOfNumbers, K]
[pos + 1, countOfNumbers, K]   [pos + 1, countOfNumbers + 1, K - nums[pos]]   [pos, countOfNumbers + 1, K - nums[pos]]
...

                                                [0, 0, 11]  // [pos, countOfNumbers, K]
                                /                   |                 \
            [1, 0, 11]                          [1, 1, 10]                         [0, 1, 10]
        /       |       \                     /     |     \                       /    |    \
[2, 0, 11]  [2, 1, 9]  [1, 1, 9]     [2, 0, 10] [2, 2, 8] [1, 2, 8]     [1, 1, 10] [1, 2, 9] [0, 2, 9]
...
*/

// Solution 3 
var coinChange3 = function(coins, amount) {
  var memo = [];

  for(var i = 0; i <= amount; i++) {
    memo[i] = Number.POSITIVE_INFINITY;
  }
  memo[0] = 0;

  for(var i = 0; i < coins.length; i++) {
    const coin = coins[i];
    for(var j = coin; j < memo.length; j++) {
      memo[j] = min2(memo[j], memo[j - coin] + 1);
    }
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
  if(memo[key]) {
    return memo[key];
  }
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
  if(a < b) { return (a < c) ? a : c };
  return (b < c) ? b : c;
}


function main() {
  console.log("-------------");
  console.log("Approach 1")
  console.log(coinChange1([], 3));
  console.log(coinChange1([2], 3));
  console.log(coinChange1([1, 2, 5], 11));
  console.log(coinChange1([3,7,405,436], 8839));
  // console.log(coinChange1([370,417,408,156,143,434,168,83,177,280,117], 9953)); takes forever

  console.log("-------------");
  console.log("Approach 2")
  console.log(coinChange2([], 3));
  console.log(coinChange2([2], 3));
  console.log(coinChange2([1, 2, 5], 11));
  console.log(coinChange2([3,7,405,436], 8839));
  console.log(coinChange2([370,417,408,156,143,434,168,83,177,280,117], 9953));

  console.log("-------------");
  console.log("Approach 3")
  console.log(coinChange3([], 3));
  console.log(coinChange3([2], 3));
  console.log(coinChange3([1, 2, 5], 11));
  console.log(coinChange3([3,7,405,436], 8839));
  console.log(coinChange3([370,417,408,156,143,434,168,83,177,280,117], 9953));
}
main();