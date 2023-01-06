const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
// time O(n) and space O(n)
const bfs = (matrix) => {
  let seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  let values = [];
  let queue = [[0, 0]];
  while (queue.length > 0) {
    let [row, col] = queue.shift();
    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[0].length ||
      seen[row][col]
    )
      continue;
    values.push(matrix[row][col]);
    seen[row][col] = true;
    for (let i = 0; i < directions.length; i++) {
      let [x, y] = directions[i];
      queue.push([row + x, col + y]);
    }
  }
  return values;
};
const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
console.log(bfs(matrix));
