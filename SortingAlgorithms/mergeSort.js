function merge(leftArr, rightArr) {
  let leftInd = 0, rightInd = 0;
  const sortedArr = [];

  while(leftInd < leftArr.length && rightInd < rightArr.length) {
    if (leftArr[leftInd] < rightArr[rightInd]) {
      sortedArr.push(leftArr[leftInd]);
      leftInd++;
    } else {
      sortedArr.push(rightArr[rightInd]);
      rightInd++;
    }
  }

  // join leftover values from left array or right array
  return sortedArr.concat(leftArr.slice(leftInd)).concat(rightArr.slice(rightInd));
}

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  
  const mid = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid));

  return merge(leftArr, rightArr);
};

console.log(mergeSort([4,12,5,3,78,12,133,32, 1000, 4000]));
console.log(mergeSort([14, 1, 10, 2, 3, 5, 6, 4, 7, 11, 12, 13]));
console.log(mergeSort([]));
console.log(mergeSort([1]));
console.log(mergeSort([2, 1]));
console.log(mergeSort([1,7,2,3,4,1,10,2,3,4,5]));
console.log(mergeSort(["One Piece", "One-Punch Man", "My Hero Academia", "Jujutsu Kaisen", "Death Note", "Fullmetal Alchemist: Brotherhood", "Akame ga Kill", "Bleach", "Black Clover"]));

module.exports.mergeSort = mergeSort;
