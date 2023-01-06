const numIslands = (grid) => {
  let count = 0;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[r].length; c += 1) {
      if (grid[r][c] === "1") {
        count = count + explore(grid, r, c);
      }
    }
  }
  return count;
};

let explore = (grid, r, c) => {
  if (
    r < 0 ||
    r > grid.length - 1 ||
    c < 0 ||
    c > grid[r].length - 1 ||
    grid[r][c] === "0"
  ) {
    return;
  }
  grid[r][c] = "0";
  explore(grid, r + 1, c);
  explore(grid, r - 1, c);
  explore(grid, r, c + 1);
  explore(grid, r, c - 1);
  return 1;
};
//BRD-hH7G-Mzu3-LNDv1