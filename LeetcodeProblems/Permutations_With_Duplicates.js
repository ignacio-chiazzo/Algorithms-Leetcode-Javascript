

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

function main() {
  test();
}

var test = function() {
  assert.deepEqual(
    subsetWithoutDuplicates([1,1,2,3]),
    [
      [ 1, 1, 2, 3 ],
      [ 1, 1, 3, 2 ],
      [ 1, 2, 1, 3 ],
      [ 1, 2, 3, 1 ],
      [ 1, 3, 1, 2 ],
      [ 1, 3, 2, 1 ],
      [ 2, 1, 1, 3 ],
      [ 2, 1, 3, 1 ],
      [ 2, 3, 1, 1 ],
      [ 3, 1, 1, 2 ],
      [ 3, 1, 2, 1 ],
      [ 3, 2, 1, 1 ]
    ]
  );
}
main();
module.exports.main = main;