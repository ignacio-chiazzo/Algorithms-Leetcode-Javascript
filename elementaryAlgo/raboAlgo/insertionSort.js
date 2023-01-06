const insertionSort = (arr) => {
  //start iteration at i = 1, because element at i = 0 with consider to be sorted
  for (let i = 1; i < arr.length; i++) {
    //element to the left of i = 1 should be j
    let j = i - 1;
    //element to be inserted
    let elementInsert = arr[i];
    //all elements to the left of i must best compare and if element to the left of j is greater
    // than element to be insert
    while (j >= 0 && arr[j] > elementInsert) {
      //insert at j + 1 the element at j
      arr[j + 1] = arr[j];
      //conditions for the while loop check others element to the left of i
      j--;
    }
    //after the while insert element at j + 1 to be element to be inserted
    arr[j + 1] = elementInsert;
  }
  return arr;
};
console.log(insertionSort([2, 1, 0, 3, 4, 9, 87, 6]));
//O(n^2)
