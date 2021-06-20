var grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

const islandPerimeterA = function (grid) {
  let perimeter = 0;

  // loop the rows
  for (let i = 0; i < grid.length; ++i) {
    // loop the columns
    for (let j = 0; j < grid[i].length; ++j) {
      // when the value is equal to 1
      if (grid[i][j]) {
        let sides = 4;

        // **counting the number of adjacent sides with 1s**
        // top side
        if (i > 0 && grid[i - 1][j]) {
          sides--;
        }

        // bottom side
        if (i < grid.length - 1 && grid[i + 1][j]) {
          sides--;
        }

        // left side
        if (j > 0 && grid[i][j - 1]) {
          sides--;
        }

        // right side
        if (j < grid[i].length - 1 && grid[i][j + 1]) {
          sides--;
        }

        perimeter += sides;
      }
    }
  }

  return perimeter;
};

console.log(islandPerimeterA(grid));
