const assert = require("assert");
const maxProfitEqual = require("../../../LeetcodeProblems/Algorithms/easy/Best_Time_to_buy_and_sell_stock").maxProfit;

function test() {
  assert.deepEqual(
    maxProfit([7,1,5,3,6,4]),
    5
  );
  assert.deepEqual(
    maxProfit([7,6,4,3,1]),
    0
  );
}

module.exports.test = test;