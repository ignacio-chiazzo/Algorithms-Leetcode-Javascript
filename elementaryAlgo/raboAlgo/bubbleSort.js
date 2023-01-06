const bubbleSort = (arr) => {
  //for every element compare with rest of elements
  for (let i = 0; i < arr.length; i++) {
    //start loop till one element less the end of array because of  j + 1 maybe  undefined
    //element i from the left is consider to be sorted already, that is why -i
    for (let j = 0; j < arr.length - 1 - i; j++) {
      //if arr[j] > arr[j + 1] swap
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(bubbleSort([2, 1, 4, 2, 5, 16, 9]));
// O(n^2)
