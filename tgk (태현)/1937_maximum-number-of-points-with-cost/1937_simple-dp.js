/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    const m = points.length;
    const n = points[0].length;

    const dp = new Array(m).fill(false).map(() => new Array(n).fill(-1));

    for (let i = 0; i < n; i++) {
        dp[0][i] = points[0][i];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                dp[i][j] = Math.max(
                    dp[i][j],
                    dp[i - 1][k] + points[i][j] - Math.abs(k - j)
                );
            }
        }
    }

    let ret = -1;
    for (let i = 0; i < n; i++) {
        ret = Math.max(ret, dp[m - 1][i]);
    }

    console.table(dp);
    return ret;
};

console.log(
    maxPoints([
        [1, 2, 3],
        [1, 5, 1],
        [3, 1, 1],
    ])
);
