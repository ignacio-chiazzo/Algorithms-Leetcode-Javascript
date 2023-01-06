/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  //Initialize queue for our BFS, Number of fresh oranges, and time to be returned.
  let queue = [],
    time = 0,
    oranges = 0;

  //Traverse matrix.  If we find a fresh orange, increment orange count.
  //If we find a rotten one, add it to the queue.
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) oranges++;
      else if (grid[row][col] === 2) queue.push([row, col, 0]);
    }
  }
  //Dirs will help us check neighbors during our BFS.  Adding these coordinates
  //to a point just gets right, left, up and down.  endR and endC are used later
  //to make sure neighbor coords are within grid.
  let dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  //Loop while queue is not empty and there are still fresh oranges.
  while (queue.length && oranges) {
    //Entry within queue can be destructured to make it easier to work with.
    //Each queue entry has a row, column and number of minutes taken for
    //infection to reach.
    const [rRow, cCol, mins] = queue.shift();

    //If orange is still fresh, we mark it as rotten, decrement our fresh oranges
    //count and set time to = mins.  Since we BFSing, the time it takes to infect
    //the last orange will be the time to infect all.  Once all oranges have
    //been infected, our orange count will = 0 and our condition in while loop
    //will stop the loop.  Time can then be returned
    if (grid[rRow][cCol] === 1) {
      grid[rRow][cCol] = 2;
      oranges--;
      time = mins;
    }

    //Here's where our dir array above comes in handy.  We destructure
    //each entry and add it to our current to get neighbor coords below.
    for (let [r, c] of dir) {
      let nextRow = r + rRow,
        nextCol = c + cCol;
      //Here we obtain our new or neighbor coordinates by adding currentRow
      //and addRow of dir.  Same for col.

      //Here we check to make sure new coordinates lie within the grid.
      if (
        nextRow < 0 ||
        nextCol < 0 ||
        nextRow >= grid.length ||
        nextCol >= grid[0].length
      )
        continue;
      //If neighbor coord is valid, and there is a fresh orange at those coordinates
      //we push coordinates to our BFS to be infected next.  We also increment the
      //mins count to track time taken to spread to that orange.
      if (grid[nextRow][nextCol] === 1) {
        queue.push([nextRow, nextCol, mins + 1]);
      }
    }
  }

  //If we still have uninfected oranges, we return -1 because it won't spread
  //to all.  Otherwise, we simply return the time from initial infected to last
  //infected orange.
  return oranges ? -1 : time;
};
