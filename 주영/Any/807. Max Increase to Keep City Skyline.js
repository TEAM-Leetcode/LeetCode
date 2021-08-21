/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let verticalArray = [];
  let horizontalArray = [];

  for (let i = 0; i < grid.length; i++) {
    let maxHorizontal = 0;
    let maxVertical = 0;
    for (let j = 0; j < grid[i].length; j++) {
      maxVertical = Math.max(grid[i][j], maxVertical);
      maxHorizontal = Math.max(grid[j][i], maxHorizontal);
    }
    verticalArray.push(maxVertical);
    horizontalArray.push(maxHorizontal);
  }

  console.log('horizontalArray: ', horizontalArray);
  console.log('verticalArray: ', verticalArray);

  let sum = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let newHeight =
        horizontalArray[i] > verticalArray[j]
          ? verticalArray[j]
          : horizontalArray[i];
      sum += newHeight - grid[i][j];
    }
  }

  return sum;
};

let grid = [
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0],
];

let gridNew = [
  [8, 4, 8, 7],
  [7, 4, 7, 7],
  [9, 4, 8, 7],
  [3, 3, 3, 3],
];

maxIncreaseKeepingSkyline(grid);
