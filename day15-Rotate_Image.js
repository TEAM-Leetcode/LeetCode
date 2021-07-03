// 2021.07.03
// 2. https://leetcode.com/problems/rotate-image/

const rotate = function (matrix) {
    const helpArr = [...matrix];
    const max = helpArr.length - 1;

    for (let i = 0; i < helpArr.length; i++) {
        let help = [];
        for (let j = 0; j < helpArr[i].length; j++) {
            help[j] = helpArr[max - j][max - i];
        }
        matrix[max - i] = help;
    }
    return matrix;
};
// console.log(
//     rotate([
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//     ])
// );

console.log(
    rotate([
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
    ])
);
// console.log(
//     rotate([
//         [1, 2],
//         [3, 4],
//     ])
// );

// [
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3],
// ];
