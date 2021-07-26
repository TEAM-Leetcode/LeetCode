/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    /**
     * grid안에서 해결 다 하는 방식입니다.
     */

    // grid = [
    //     [1, 2, 3],
    //     [4, 5, 6],
    //     [7, 8, 9]
    // ] 와 k = 3 이면,

    // 1. grid를 뒤바꾸고,
    // grid = [
    //     [9, 8, 7],
    //     [6, 5, 4],
    //     [3, 2, 1]
    // ]

    // 2. 뒤바뀐 grid에 앞 k 숫자들을 뒤바꾸고,
    // grid = [
    //     [7, 8, 9],
    //     [6, 5, 4],
    //     [3, 2, 1]
    // ]

    // 3. 나머지 숫자들도 바꿉니다
    // grid = [
    //     [7, 8, 9],
    //     [1, 2, 3],
    //     [4, 5, 6]
    // ]

    // 쨔잔

    const m = grid.length;
    const n = grid[0].length;

    k %= m * n;

    if (k == 0) {
        return grid;
    }

    const size = m * n;

    reverse(grid, 0, size - 1);
    reverse(grid, 0, k - 1);
    reverse(grid, k, size - 1);

    return grid;
};

/**
 * Reverse grid contents in place from start to end inclusively
 * @param {number[][]} grid
 * @param {number} start
 * @param {number} end
 */
var reverse = function (grid, start, end) {
    const n = grid[0].length;

    let leftI = 0;
    let leftJ = start;

    while (leftJ >= n) {
        leftI++;
        leftJ -= n;
    }

    let rightI = 0;
    let rightJ = end;

    while (rightJ >= n) {
        rightI++;
        rightJ -= n;
    }

    while (leftI * n + leftJ < rightI * n + rightJ) {
        [grid[leftI][leftJ], grid[rightI][rightJ]] = [
            grid[rightI][rightJ],
            grid[leftI][leftJ],
        ];

        if (++leftJ >= n) {
            leftI++;
            leftJ -= n;
        }

        if (--rightJ < 0) {
            rightI--;
            rightJ += n;
        }
    }
};
