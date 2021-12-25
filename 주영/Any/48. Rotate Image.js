var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  console.log('matrix: ', matrix);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }

  console.log('matrix: ', matrix);
};

const rotate = matrix => {
  let len = matrix.length;

  for (let i = 0; i < len / 2; i++) {
    for (let j = 0; j < (len + 1) / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[len - j - 1][i];
      matrix[len - j - 1][i] = matrix[len - i - 1][len - j - 1];
      matrix[len - i - 1][len - j - 1] = matrix[j][len - i - 1];
      matrix[j][len - i - 1] = temp;
    }
  }
  console.log('matrix: ', matrix);
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotate(matrix);
