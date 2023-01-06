const smallNum = (nums) => {
  if (nums.length === 0) return null;
  let smallest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    smallest = Math.min(num, smallest);
  }
  return smallest;
};
console.log(smallNum([3, 5, 8, 1, 9]));
console.log(smallNum([]));
console.log(smallNum([3, 5, 2, 4]));
