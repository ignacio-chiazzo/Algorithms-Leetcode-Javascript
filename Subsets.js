var subsets = function(nums) {
  var ret = [];
  
  subsetByPosition = function (nums, position, current) {
    console.log(current);
    if(position == nums.length) {
        return [current];
    }
    var currentRight = current.slice().concat([nums[position]]);
    return subsetByPosition(nums, position + 1, currentRight).concat(subsetByPosition(nums, position + 1, current));
  }
  
  return subsetByPosition(nums, 0, []);
};

function main() {
  console.log(subsets([1,2,3]));
}
  
module.exports.main = main;
