const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
//time O(m*n) and Space O(min(m, n)) because implemented BFS
//For the same solution for DFS with time O(m*n) and Space O(min(m, n))
//I use BSF for better space performance
const numberOfIsland = (matrix) => {
  if (matrix.length === 0) {
    return 0;
  }
  let islandCount = 0;
  let queue = [];
  //sequential order
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1) {
        islandCount++;
        queue.push([row, col]);
        while (queue.length > 0) {
          let current = queue.shift();
          const currRow = current[0];
          const currCol = current[1];
          matrix[currRow][currCol] = 0;
          for (let i = 0; i < directions.length; i++) {
            const [directionRow, directionCol] = directions[i];
            const currentRow = currRow + directionRow;
            const currentCol = currCol + directionCol;

            if (
              currentRow < 0 ||
              currentRow >= matrix.length ||
              currentCol < 0 ||
              currentCol >= matrix[0].length
            ) {
              continue;
            }
            if (matrix[currentRow][currentCol] === 1) {
              queue.push([currentRow, currentCol]);
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
