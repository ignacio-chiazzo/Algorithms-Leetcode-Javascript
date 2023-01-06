//recursive solution for BFS matrix
let directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [-1, 0],
];
//time O(n) and space O(n)
const traversalDfS = (matrix) => {
  const seen = new Array(array.length)
    .fill(0)
    //because the inner array are of the same length we can arrray[0]
    .map(() => new Array(matrix[0].length).fill(false));
  let values = [];
  console.log(seen);
  dfs(matrix, 0, 0, seen, values);
  return values;
};

const dfs = (matrix, row, col, seen, values) => {
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[row].length ||
    seen[row][col]
  )
    return;
  values.push(matrix[row][col]);
  seen[row][col] = true;
  for (let i = 0; i < directions.length; i++) {
    const directionDir = directions[i];
    dfs(matrix, row + directionDir[0], col + directionDir[1], seen, values);
  }
  //   dfs(matrix, row - 1, col, seen, values);
  //   dfs(matrix, row, col + 1, seen, values);
  //   dfs(matrix, row + 1, col, seen, values);
  //   dfs(matrix, row, col - 1, seen, values);
};
let array = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
console.log(traversalDfS(array));
//[ 1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18, 17, 12, 7, 6, 11, 16 ]

//iterative solution
const bfsIterative = (matrix) => {
  let seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  console.log(seen);
  let values = [];
  let stack = [[0, 0]];
  while (stack.length > 0) {
    let [row, col] = stack.pop();
    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[0].length ||
      seen[row][col]
    )
      continue;
    seen[row][col] = true;
    values.push(matrix[row][col]);
    for (let i = 0; i < directions.length; i++) {
      const [x, y] = directions[i];
      stack.push([row + x, col + y]);
    }
  }
  return values;
};
let arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
console.log(bfsIterative(arr));
