var minPathSum = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j !== 0) grid[i][j] += grid[i][j - 1];
      if (i !== 0 && j === 0) grid[i][j] += grid[i - 1][j];
      if (i !== 0 && j !== 0)
        grid[i][j] = grid[i][j] + Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  let len = grid.length;

  console.log(grid[len - 1][len - 1]);
};

let grid = [
  [1, 2, 3],
  [4, 5, 6],
];
minPathSum(grid);
