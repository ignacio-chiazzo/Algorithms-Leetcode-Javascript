const binarySearch = (array, num) => {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let mid = Math.floor((end + start) / 2);
    let middleElem = array[mid];
    if (num === middleElem) return true;
    else if (num < middleElem) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return false;
};
console.log(binarySearch([2, 4, 6, 7, 9, 0], 10));
console.log(binarySearch([2, 4, 6, 7, 9, 0], 2));
console.log(binarySearch([2, 4, 6, 7, 9, 0], 7));
function binarySearchTwo(array, num) {
  let start = 0;
  let end = array.length - 1;
  do {
    let mid = Math.floor((end + start) / 2);
    let middleElem = array[mid];
    if (num === middleElem) return true;
    else if (num < middleElem) {
      end = mid;
    } else {
      start = mid + 1;
    }
  } while (start < end);
  return false;
}
console.log(binarySearchTwo([2, 4, 6, 7, 9, 0], 10));
console.log(binarySearchTwo([2, 4, 6, 7, 9, 0], 2));
console.log(binarySearchTwo([2, 4, 6, 7, 9, 0], 7));
