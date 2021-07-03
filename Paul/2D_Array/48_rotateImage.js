var matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Output: [[7,4,1],[8,5,2],[9,6,3]]

var matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

var matrix3 = [[1]];
// Output: [[1]]

var matrix4 = [
  [1, 2],
  [3, 4],
];
// Output: [[3,1],[4,2]]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let length = matrix.length;
  let iLength = ((length + 1) / 2) | 0;
  let jLength = (length / 2) | 0;

  for (let i = 0; i < iLength; ++i) {
    for (let j = 0; j < jLength; ++j) {
      let temp = matrix[length - 1 - j][i];
      matrix[length - 1 - j][i] = matrix[length - 1 - i][length - 1 - j];
      matrix[length - 1 - i][length - 1 - j] = matrix[j][length - 1 - i];
      matrix[j][length - 1 - i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
};

console.log(matrix1);

// https://leetcode.com/problems/rotate-image/discuss/1175496/JS-Python-Java-C%2B%2B-or-Easy-4-Way-Swap-Solution-w-Explanation
// transpose + reverse
const rotate = function (matrix) {
  let n = matrix.length;

  // transpose
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let tmp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = tmp;
    }
  }

  // reverse
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = tmp;
    }
  }
};
