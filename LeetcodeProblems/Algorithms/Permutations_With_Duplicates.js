

// Permutations without
var subsetWithoutDuplicates = function(nums) {
  if(nums.lenght == 0){
    return;
  }
  var solution = [];
  subsetWithoutDuplicatesAux(nums, [], solution);
  return solution;
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

module.exports.subsetWithoutDuplicates = subsetWithoutDuplicates;
