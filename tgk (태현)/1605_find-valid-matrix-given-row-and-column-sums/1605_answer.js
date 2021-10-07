/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
    const m = rowSum.length;
    const n = colSum.length;

    const ret = new Array(m).fill(-1).map(() => new Array(n).fill(-1));

    let count = 0;

    // handle all predefined 0s
    for (let i = 0; i < m; i++) {
        if (rowSum[i] === 0) {
            for (let j = 0; j < n; j++) {
                if (ret[i][j] === -1) {
                    ret[i][j] = 0;
                    count++;
                }
            }
        }
    }

    for (let j = 0; j < n; j++) {
        if (colSum[j] === 0) {
            for (let i = 0; i < m; i++) {
                if (ret[i][j] === -1) {
                    ret[i][j] = 0;
                    count++;
                }
            }
        }
    }

    // main algo
    while (count < m * n) {
        let rowMinIndex = -1;
        for (let i = 0; i < m; i++) {
            rowMinIndex =
                rowSum[i] === 0
                    ? rowMinIndex
                    : rowMinIndex === -1
                    ? i
                    : rowSum[i] < rowSum[rowMinIndex]
                    ? i
                    : rowMinIndex;
        }

        let colMinIndex = -1;
        for (let i = 0; i < n; i++) {
            colMinIndex =
                colSum[i] === 0
                    ? colMinIndex
                    : colMinIndex === -1
                    ? i
                    : colSum[i] < colSum[colMinIndex]
                    ? i
                    : colMinIndex;
        }

        if (rowSum[rowMinIndex] < colSum[colMinIndex]) {
            for (let i = 0; i < n; i++) {
                if (ret[rowMinIndex][i] === -1) {
                    if (rowSum[rowMinIndex] < colSum[i]) {
                        ret[rowMinIndex][i] = rowSum[rowMinIndex];
                        colSum[i] -= rowSum[rowMinIndex];
                        rowSum[rowMinIndex] = 0;
                        count++;
                    } else {
                        ret[rowMinIndex][i] = 0;
                        count++;
                    }
                }
            }
        } else {
            for (let i = 0; i < m; i++) {
                if (ret[i][colMinIndex] === -1) {
                    if (colSum[colMinIndex] <= rowSum[i]) {
                        ret[i][colMinIndex] = colSum[colMinIndex];
                        rowSum[i] -= colSum[colMinIndex];
                        colSum[colMinIndex] = 0;
                        count++;
                    } else {
                        ret[i][colMinIndex] = 0;
                        count++;
                    }
                }
            }
        }
    }

    return ret;
};
