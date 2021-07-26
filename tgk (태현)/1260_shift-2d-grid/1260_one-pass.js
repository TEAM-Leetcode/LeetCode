/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    /**
     * grid에 있는 모든 숫자를 한번씩만 봐서 정답을 유추하는 방법입니다
     * grid[i][j]가 ans에 어디로 가야 하는지 알아내 정답을 만들어 냅니다
     */

    // m = 세로 길이
    // n = 가로 길이
    const m = grid.length;
    const n = grid[0].length;

    // k 를 m * n보더 적게 줄입니다
    // 예를 들어, grid크기가 9인데 k가 10이면 k를 1로 줄입니다.
    k %= m * n;

    // k가 0이면 grid를 그대로 리턴합니다
    if (k == 0) {
        return grid;
    }

    // ans이란 2d array를 하나 만듭니다
    const ans = new Array(m).fill(0).map(() => new Array(n).fill(0));

    // 이제 grid의 모든 숫자를 돌아봅니다
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // grid[i][j]가 ans의 어디에 들어가야 하는지 계산합니다
            // j에 k를 더해 i와 j를 다듬으면 됩니다
            let newI = i;
            let newJ = j + k;
            while (newJ >= n) {
                newI++;
                newJ -= n;
            }
            if (newI >= m) {
                newI -= m;
            }

            // ans에 grid[i][j]를 넣습니다
            ans[newI][newJ] = grid[i][j];
        }
    }

    // ans를 리턴합니다
    return ans;
};
