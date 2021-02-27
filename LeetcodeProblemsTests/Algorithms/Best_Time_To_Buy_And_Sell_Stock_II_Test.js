const assert = require('assert');
const maxProfit = require('../../LeetcodeProblems/Algorithms/Best_Time_To_Buy_And_Sell_Stock_II').maxProfit;

function test() {
  assert.equal(maxProfit([7,1,5,3,6,4]), 7);
  assert.equal(maxProfit([7,1,5,3320,6,4]), 3319);
}

module.exports.test = test;
