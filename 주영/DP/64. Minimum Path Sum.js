var minPathSum = function (grid) {
  let rowLength = grid.length;
  let colLength = grid[0].length;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j !== 0) grid[i][j] += grid[i][j - 1];
      if (i !== 0 && j === 0) grid[i][j] += grid[i - 1][j];
      if (i !== 0 && j !== 0) {
        grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
      }
    }
  }
  return grid[rowLength - 1][colLength - 1];
};

let grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

grid = [
  [1, 4, 5],
  [2, 5, 1],
  [6, 2, 1],
];

grid = [
  [1, 4, 5],
  [2, 7, 6],
  [6, 8, 7],
];

minPathSum(grid);
