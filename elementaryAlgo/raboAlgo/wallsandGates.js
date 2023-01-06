// You are given a m x n 2D grid initialized with these three possible values.

// -1 - A wall or an obstacle. 0 - A gate. INF - Infinity means an empty room.
// We use the value 231 - 1 = 2147483647 to represent INF as you may assume that
// the distance to a gate is less than 2147483647. Fill each empty room with the
// distance to its nearest gate. If it is impossible to reach a gate, it should be
// filled with INF.

let directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const wallsAndGates = (rooms) => {
  if (!rooms || rooms.length === 0) {
    return;
  }

  let rows = rooms.length;
  let cols = rooms[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // find all gates
      if (rooms[i][j] === 0) {
        traverse(rooms, i, j, rows, cols, 0);
      }
    }
  }
  return rooms;
};

function traverse(rooms, i, j, rows, cols, dist) {
  //we have to set boundary in which we want to perform our depth first search
  if (i >= 0 && i < rows && j >= 0 && j < cols) {
    //even we within this bounded, if the element is not -1 and element is greater than or equal to the distance
    if (rooms[i][j] !== -1 && rooms[i][j] >= dist) {
      // set the element to be the new distance
      rooms[i][j] = dist;
      //perform depth first and increase the distance
      traverse(rooms, i + 1, j, rows, cols, dist + 1);
      traverse(rooms, i, j + 1, rows, cols, dist + 1);
      traverse(rooms, i - 1, j, rows, cols, dist + 1);
      traverse(rooms, i, j - 1, rows, cols, dist + 1);
    }
  }
}
let INF = 2187983647;
console.log(
  wallsAndGates([
    [INF, -1, 0, INF],
    [INF, INF, INF, -1],
    [INF, -1, INF, -1],
    [0, -1, INF, INF],
  ])
);
