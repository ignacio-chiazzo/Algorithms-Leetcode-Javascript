const cartesianProduct = (arr1, arr2) => {
  let cartesian = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      cartesian.push([arr1[i], arr2[j]]);
    }
  }
  return cartesian;
};
console.log(cartesianProduct([1, 3], [4, 5, 6]));
// Time O(mn) and space
