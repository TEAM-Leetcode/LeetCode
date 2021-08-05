/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    const array = [];

    for (const nums of matrix) {
        for (const num of nums) {
            array.push(num);
        }
    }

    array.sort((a, b) => a - b);

    return array[k - 1];
};

console.log(
    kthSmallest(
        [
            [1, 5, 9],
            [10, 15, 23],
            [12, 20, 30],
        ],
        8
    )
);
