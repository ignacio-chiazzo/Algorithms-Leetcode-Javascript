const assert = require("assert");
const mergeSort = require("../SortingAlgorithms/mergeSort").mergeSort;

var test = function () {
  assert.deepEqual(
    [ 3, 4, 5, 12, 12, 32, 78, 133, 1000, 4000 ],
    mergeSort([4, 12, 5, 3, 78, 12, 133, 32, 1000, 4000])
  );
  
  assert.deepEqual(
    [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14],
    mergeSort([14, 1, 10, 2, 3, 5, 6, 4, 7, 11, 12, 13])
  );
  
  assert.deepEqual([], mergeSort([]));
  assert.deepEqual([1], mergeSort([1]));
  assert.deepEqual([1, 2], mergeSort([2, 1]));
  assert.deepEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 7, 10], mergeSort([1,7,2,3,4,1,10,2,3,4,5])
  );

  assert.deepEqual(
    ["Akame ga Kill", "Black Clover", "Bleach", "Death Note", "Fullmetal Alchemist: Brotherhood", "Jujutsu Kaisen", "My Hero Academia", "One Piece", "One-Punch Man"],
    mergeSort(["One Piece", "One-Punch Man", "My Hero Academia", "Jujutsu Kaisen", "Death Note", "Fullmetal Alchemist: Brotherhood", "Akame ga Kill", "Bleach", "Black Clover"])
  );
};

module.exports.test = test;
