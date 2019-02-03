// Testing Gist
var heapSort = function(arr) {
  var n = arr.length;
  for(var i = Math.floor(n/2) - 1; i >= 0; i--)
    heapify(arr, n, i);

  for(var i = n - 1; i >= 0; i--) {
    swap(arr, 0, i);
    heapify(arr, i, 0);
  }

  return arr;
}

var heapify = function(arr, n, i) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;

  if(left >= n && right >= n)
    return;

  const leftValue = (left >= n) ? Number.NEGATIVE_INFINITY : arr[left];
  const rightValue = (right >= n) ? Number.NEGATIVE_INFINITY : arr[right];

  if(arr[i] > leftValue && arr[i] > rightValue) 
    return;

  if(leftValue > rightValue) {
    swap(arr, i, left);
    heapify(arr, n, left);
  } else {
    swap(arr, i, right);
    heapify(arr, n, right);
  }
}

var swap = function(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

console.log(heapSort([14, 1, 10, 2, 3, 5, 6, 4, 7, 11, 12, 13]));
console.log(heapSort([]));
console.log(heapSort([1]));
console.log(heapSort([2, 1]));
console.log(heapSort([1,7,2,3,4,1,10,2,3,4,5]))

