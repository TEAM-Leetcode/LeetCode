/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    // early exit
    if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1) {
        return 0;
    }

    // fill top row
    let blocked = false;
    for (let j = 0; j < n; j++) {
        if (!blocked && obstacleGrid[0][j] === 1) {
            blocked = true;
        }

        if (blocked) {
            obstacleGrid[0][j] = -1;
        } else {
            obstacleGrid[0][j] = 1;
        }
    }

    // fill left column
    blocked = false;
    for (let i = 1; i < m; i++) {
        if (!blocked && obstacleGrid[i][0] === 1) {
            blocked = true;
        }

        if (blocked) {
            obstacleGrid[i][0] = -1;
        } else {
            obstacleGrid[i][0] = 1;
        }
    }

    // fill the rest
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                obstacleGrid[i][j] = -1;
            } else {
                obstacleGrid[i][j] =
                    (obstacleGrid[i - 1][j] === -1
                        ? 0
                        : obstacleGrid[i - 1][j]) +
                    (obstacleGrid[i][j - 1] === -1
                        ? 0
                        : obstacleGrid[i][j - 1]);
            }
        }
    }

    // return
    return obstacleGrid[m - 1][n - 1] === -1 ? 0 : obstacleGrid[m - 1][n - 1];
};

const obstacleGrid = [[1], [0]];

console.log(uniquePathsWithObstacles(obstacleGrid));
