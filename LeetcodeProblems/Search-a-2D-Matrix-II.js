var searchMatrix = function(matrix, target) {
  if (matrix.length == 0)
      return false
  var lastCol = matrix[0].length - 1;
  var firstRow = 0;
  
  
  while(lastCol >= 0 && firstRow < matrix.length) {
      if(matrix[firstRow][lastCol] == target) {
          return true;
      } else if(matrix[firstRow][lastCol] > target) {
          lastCol--;
      } else {
          firstRow++;
      }
  }
  
  return false;
};
const matrix1 = [
  [1,4,7,    11,15],
  [2,5,8,    12,19],
  [3,6,9,    16,22],
  [10,13,14, 17,24],
  [18,21,23, 26,30]
];


var main = function(n) {
  console.log(searchMatrix(matrix1, 5));
  console.log(searchMatrix(matrix1, 0));
  console.log(searchMatrix(matrix1, 15));
}

main();

module.exports.main = main;
