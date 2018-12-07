// https://leetcode.com/problems/permutations-ii/description/

// Permutations without
var subsetWithoutDuplicates = function(nums) {
  if(nums.lenght == 0){
    return;
  }
  var solution = [];
  subsetWithoutDuplicatesAux(nums, [], solution);
  console.log(solution);
}

var subsetWithoutDuplicatesAux = function(nums, current, sol) {
  if(nums.length == 0){
    sol.push(current);
  }

  var setNums = new Set();

  nums.forEach((value, index) => {
    if(setNums.has(value)) {
      return;
    }
    setNums.add(value);
    var newCurrent = [...current, value]
    
    var newNum = nums.filter(function(num, idx) { return index !== idx});
    subsetWithoutDuplicatesAux(newNum, newCurrent, sol);
  })
}

function main() {
  subsetWithoutDuplicates([1,1,2,3]);
}

module.exports.main = main;