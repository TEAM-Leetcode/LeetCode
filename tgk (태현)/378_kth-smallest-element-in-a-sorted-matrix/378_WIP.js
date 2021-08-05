/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    const candidate = [];

    const n = matrix.length;
    let i = 0,
        j = 0;

    for (let count = 0; count < n * n; count++) {
        const min = (i + 1) * (j + 1);
        const max = i * n + j * n + 1 - i * j;

        if (min <= k && k <= max) {
            candidate.push(matrix[i][j]);
        }

        j++;
        if (j === n) {
            j = 0;
            i++;
        }
    }

    candidate.sort((a, b) => a - b);
    console.log(candidate);
};

kthSmallest(
    [
        [1, 5, 9],
        [10, 15, 23],
        [12, 20, 30],
    ],
    6
);
