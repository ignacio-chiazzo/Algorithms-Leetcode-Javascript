/*
Award Budget Cuts
The awards committee of your alma mater (i.e. your college/university) asked for your assistance with a budget allocation problem they’re facing. Originally, 
the committee planned to give N research grants this year. However, due to spending cutbacks, 
the budget was reduced to newBudget dollars and now they need to reallocate the grants. 
The committee made a decision that they’d like to impact as few grant recipients as possible by applying a maximum cap on all grants. 
Every grant initially planned to be higher than cap will now be exactly cap dollars. Grants less or equal to cap, obviously, won’t be impacted.

Given an array grantsArray of the original grants and the reduced budget newBudget, write a function findGrantsCap that finds in the most efficient manner a cap such that the least number of recipients is impacted and that the new budget constraint is met (i.e. sum of the N reallocated grants equals to newBudget).

Analyze the time and space complexities of your solution.

Example:

input:  grantsArray = [2, 100, 50, 120, 1000], newBudget = 190

output: 47 # and given this cap the new grants array would be
           # [2, 47, 47, 47, 47]. Notice that the sum of the
           # new grants is indeed 190
Constraints:

[time limit] 5000ms

[input] array.double grantsArray

0 ≤ grantsArray.length ≤ 20
0 ≤ grantsArray[i]
[input] double newBudget

[output] double
*/
var cutAwardBadges = function(nums, newBadge) {
  var currentBadge = 0;
  for(var i = 0; i < nums.length; i++)
    currentBadge += nums[i];

  if(currentBadge < newBadge)
    return;

  const cap = findCap(nums, currentBadge, newBadge);

  var iter = 0;
  while(iter >= 0 && nums[iter] > cap) {
    nums[iter] = cap;
    iter++;
  }

  return nums;
}

var findCap = function(nums,  currentBadge, newBadge) {
  nums.sort(function(a, b) { return b - a });
  if(nums[nums.length - 1] * nums.length > newBadge)
    return newBadge / nums.length;

  var diff = currentBadge - newBadge;
  var iter = 0;
  while(iter < nums.length - 1 && diff > 0) {
    const substraction = nums[iter] - nums[iter + 1]
    diff -= (iter + 1)  * substraction;
    iter++;
  }

  return nums[iter] + (-diff) / iter;
}

module.exports.cutAwardBadges = cutAwardBadges;
