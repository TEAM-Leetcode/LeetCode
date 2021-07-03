// 혼자 못 풀었음.

// 다른 사람의 풀이 1
var islandPerimeter = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  var perimeter = 0;

  for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {
      if (!grid[row][col]) continue;

      perimeter += 4;

      // abstract the number of adjacent island
      if (row > 0 && grid[row - 1][col]) perimeter--;
      if (col > 0 && grid[row][col - 1]) perimeter--;
      if (row < rows - 1 && grid[row + 1][col]) perimeter--;
      if (col < cols - 1 && grid[row][col + 1]) perimeter--;
    }
  }

  return perimeter;
};

grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
islandPerimeter(grid);

// 다른 사람의 풀이2
var islandPerimeter = function (grid) {
  var diameter = 0;
  if (!grid || grid.length == 0) return 0;
  for (var m = 0; m < grid.length; m++) {
    for (var n = 0; n < grid[m].length; n++) {
      if (grid[m][n] == 1) {
        var left = n - 1 < 0 ? 0 : grid[m][n - 1];
        var right = n + 1 >= grid[m].length ? 0 : grid[m][n + 1];
        var top = m - 1 < 0 ? 0 : grid[m - 1][n];
        var down = m + 1 >= grid.length ? 0 : grid[m + 1][n];
        var numOfAdj = right + left + top + down;
        diameter += 4 - numOfAdj;
      }
    }
  }
  return diameter;
};

// Mr.P님 풀이 3 (Java)
// class Solution {
//   public int islandPerimeter(int[][] grid) {
//       int peri = 0;
//       int row = grid.length;
//       int col = grid[0].length;

//       for(int r = 0; r < row; r++) {
//           for(int c = 0; c < col; c++) {
//               if(grid[r][c] == 1) {
//                   peri += around(grid, r - 1, c);
//                   peri += around(grid, r, c - 1);
//               }
//           }
//       }
//       return peri;
//   }

//   private int around(int[][] grid, int r, int c) {
//       if(r < 0 || r >= grid.length || c < 0 || c >= grid[0].length)  // ??
//           return 2;
//       return grid[r][c] == 1 ? 0 : 2; // ??
//   }
// }
