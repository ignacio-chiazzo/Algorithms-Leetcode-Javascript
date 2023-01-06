const quickSort = (arr) => {
  //this condition is can arr.length === 1 || arr.length === 0 because arr.length can be zero
  if (arr.length < 2) return arr;
  //pick last element as pivot
  let pivot = arr[arr.length - 1],
    left = [],
    right = [];
  //iterate from first element but not include the pivot
  for (let i = 0; i < arr.length - 1; i++) {
    //current element is greater than pivot
    if (arr[i] > pivot) right.push(arr[i]);
    //else
    else left.push(arr[i]);
  }
  //call quick sort recusively until it reaches base case
  //and the base could be empty array or array with single element,
  //copy the base cases into a new array with the pivot in the centre
  return [...quickSort(left), pivot, ...quickSort(right)];
};
console.log(quickSort([9, 4, 5, 6, 7, 8, 10, 11]));
