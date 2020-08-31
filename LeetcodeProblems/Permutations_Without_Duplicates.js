/*
Permutations withuot duplicates
https://leetcode.com/problems/permutations/description/

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/


// Permutations wihto
var subsetWithDuplicates = function(nums) {
  if(nums.lenght == 0){
    return;
  }
  var solution = [];
  subsetWithDuplicatesAux(nums, [], solution);
  return solution;
}

var subsetWithDuplicatesAux = function(nums, current, sol) {
  if(nums.length == 0){
    sol.push(current);
  }

  for(var i = 0; i < nums.length; i++) {
    var newCurrent = [...current, nums[i]]
    var newNums = nums.filter(function(num, index) { return index !== i });
    subsetWithDuplicatesAux(newNums, newCurrent, sol);
  }
}
    
function main() {
  test();
}

var test = function() {
  assert.deepEqual(
    subsetWithDuplicates([1,2,3]),
    [
      [ 1, 2, 3 ],
      [ 1, 3, 2 ],
      [ 2, 1, 3 ],
      [ 2, 3, 1 ],
      [ 3, 1, 2 ],
      [ 3, 2, 1 ]
    ]
  );
}

module.exports.main = main;