const mergeSort = (arr) => {
  //whenever the elements are less than two return the array
  if (arr.length < 2) return arr;
  // get mid point
  let mid = Math.floor(arr.length / 2);
  // copy the element from start but not including the middle
  let left = arr.slice(0, mid);
  // copy the element from the middle to the end
  let right = arr.slice(mid);
  //make a recursive call for both left and right until
  //all elements are one. Call the merge helper function
  //pass in left and right.
  return merge(mergeSort(left), mergeSort(right));
};
const merge = (leftArr, rightArr) => {
  let sorted = [];
  //check if both leftArr and rightArr still have elements
  while (leftArr.length && rightArr.length) {
    //check if the first element of left array is less than
    // first element of right array, then remove it and push
    //to the sorted array
    if (leftArr[0] <= rightArr[0]) {
      sorted.push(leftArr.shift());
    } else {
      //else
      sorted.push(rightArr.shift());
    }
  }
  //copy in this order for the elements to sorted and return
  return [...sorted, ...leftArr, ...rightArr];
};
console.log(mergeSort([9, 2, -1, -6, 8, 3]));
