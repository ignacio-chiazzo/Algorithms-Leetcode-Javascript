const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const numberOfIsland = (matrix) => {
  if (matrix.length === 0) return 0;
  let stack = [];
  islandCount = 0;
  //sequential check
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1) {
        islandCount++;
        stack.push([row, col]);
        while (stack.length > 0) {
          let current = stack.pop();
          const [currRow, currCol] = current;
          matrix[currRow][currCol] = 0;
          for (let i = 0; i < directions.length; i++) {
            //destructure movement up, down, right, left
            const [x, y] = directions[i];
            // add the movement search to the current position
            const currentRow = x + currRow;
            const currentCol = y + currCol;
            if (
              currentRow < 0 ||
              currentRow >= matrix.length ||
              currentCol < 0 ||
              currentCol >= matrix[0].length
            ) {
              continue;
            }
            if (matrix[currentRow][currentCol] === 1) {
              stack.push([currentRow, currentCol]);
            }
          }
        }
      }
    }
  }
  return islandCount;
};

const matrix = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 1],
];
console.log(numberOfIsland(matrix));
