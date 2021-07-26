var shiftGrid = function (grid, k) {
  const len = grid[0].length;
  const arr = grid.flat();
  const result = [];

  while (k-- > 0) arr.unshift(arr.pop()); // 신기

  for (let i = 0; i < arr.length; i += len) {
    result.push(arr.slice(i, i + len));
  }

  return result;
};

let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  k = 1;
shiftGrid(grid, k);
