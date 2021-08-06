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
        // left dp: dp assuming that max-points are always at the left side
        const leftDp = new Array(n).fill(-1);
        leftDp[0] = dp[i - 1][0];
        for (let k = 1; k < n; k++) {
            leftDp[k] = Math.max(leftDp[k - 1], dp[i - 1][k] + k);
        }

        // right dp: dp assuming that max-points are always at the right side
        const rightDp = new Array(n).fill(-1);
        rightDp[n - 1] = dp[i - 1][n - 1] - n + 1;
        for (let k = n - 2; k >= 0; k--) {
            rightDp[k] = Math.max(rightDp[k + 1], dp[i - 1][k] - k);
        }

        // max point is either at leftdp or rightdp
        for (let j = 0; j < n; j++) {
            dp[i][j] = Math.max(leftDp[j] - j, rightDp[j] + j) + points[i][j];
        }
    }

    console.table(dp);
    return Math.max(...dp[m - 1]);
};

console.log(
    maxPoints([
        [1, 2, 3],
        [1, 5, 1],
        [3, 1, 1],
    ])
);
