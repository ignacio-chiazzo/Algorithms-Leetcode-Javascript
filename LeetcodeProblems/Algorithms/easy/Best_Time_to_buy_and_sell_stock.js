/*
121. Best Time to Buy and Sell Stock
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

Problem:
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:

1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4
*/
/*
Approach:
let use initialize Left and Right pointer to first and second position of array
Here Left is to buy stock and Right is to sell stock

Then we initialize our maxProfitValue as 0.

Now we will start our while loop and we will run till our
Right pointer less then length of array
For Example:
prices=[7,1,5,3,6,4]
Note:
prices[left] --> buy stock
prices[right] --> sell stock
now we will check price at right and left pointer

step 1:

price[left]=7 price[right]=1 profit=-6
here price[left] is greater than price[right] so we will move left pointer to the right position and increment our right pointer by 1. We always want our left point to be minimum

step 2:

price[left]=1 price[right]=5 profit=4
here price[left] is less than price[right] which means we will get profit so we will update our maxProfitValue and move our right pointer alone

step 3:

price[left]=1 price[right]=3 profit=2
here price[left] is less than price[right] which means we will get profit so we will check our maxProfitValue previously it

was 4 now our current profit is 2 so we will check which is maximum and update our maxProfitValue and move our right pointer alone

step 4:

price[left]=1 price[right]=6 profit=5
here price[left] is less than price[right] which means we will get profit so we will check our maxProfitValue previously it was 4 now our current profit is 5 so we will check which is maximum and update our maxProfitValue and move our right pointer alone

step 5:

price[left]=1 price[right]=4 profit=3
same logic as above
*/

const maxProfit = (prices) => {
  let left = 0; // Buy
  let right = 1; // sell
  let maxProfitValue = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      maxProfitValue = Math.max(maxProfitValue, profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfitValue;
};

module.exports.maxProfit = maxProfit;