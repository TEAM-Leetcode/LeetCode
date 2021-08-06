/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    const minPath = new Array(m).fill(0).map(() => new Array(n).fill(0));
    minPath[0][0] = grid[0][0];

    for (let i = 1; i < n; i++) {
        minPath[0][i] = minPath[0][i - 1] + grid[0][i];
    }

    for (let i = 1; i < m; i++) {
        minPath[i][0] = minPath[i - 1][0] + grid[i][0];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            minPath[i][j] =
                Math.min(minPath[i - 1][j], minPath[i][j - 1]) + grid[i][j];
        }
    }

    return minPath[m - 1][n - 1];
};

console.log(
    minPathSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
    ])
);
