/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    const n = grid.length;

    const verticalMax = new Array(n);
    const horizontalMax = new Array(n);
    const maxCoordinates = new Set();

    for (let i = 0; i < n; i++) {
        let max = -Infinity;
        let coordinate = -1;
        for (let j = 0; j < n; j++) {
            if (max < grid[i][j]) {
                max = grid[i][j];
                coordinate = i * n + j;
            }
        }
        verticalMax[i] = max;
        maxCoordinates.add(coordinate);
    }

    for (let j = 0; j < n; j++) {
        let max = -Infinity;
        let coordinate = -1;
        for (let i = 0; i < n; i++) {
            if (max < grid[i][j]) {
                max = grid[i][j];
                coordinate = i * n + j;
            }
        }
        horizontalMax[j] = max;
        maxCoordinates.add(coordinate);
    }

    // const gridNew = new Array(n);
    // for (let i = 0; i < n; i++) {
    //     const row = new Array(n);
    //     for (let j = 0; j < n; j++) {
    //         if (!maxCoordinates.has(i * n + j)) {
    //             row[j] = Math.min(verticalMax[i], horizontalMax[j]);
    //         } else {
    //             row[j] = grid[i][j];
    //         }
    //     }
    //     gridNew[i] = row;
    // }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!maxCoordinates.has(i * n + j)) {
                sum += Math.min(verticalMax[i], horizontalMax[j]) - grid[i][j];
            }
        }
    }

    return sum;
};

const grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

console.log(maxIncreaseKeepingSkyline(grid));
