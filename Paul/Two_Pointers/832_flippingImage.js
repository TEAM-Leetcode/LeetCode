// https://leetcode.com/problems/flipping-an-image/solution/

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = function (image) {
  // reverse
  for (let i = 0; i < image.length; ++i) {
    let length = (image[i].length / 2) | 0;

    for (let j = 0; j < length; ++j) {
      let temp = image[i][j];
      image[i][j] = image[i][image[i].length - 1 - j];
      image[i][image[i].length - 1 - j] = temp;
    }
  }

  // invert
  for (let i = 0; i < image.length; ++i) {
    for (let j = 0; j < image[i].length; ++j) {
      image[i][j] = image[i][j] === 1 ? 0 : 1;
    }
  }

  return image;
};

// leetcode solution
const flipAndInvertImage = function (A) {
  return A.map((a) => {
    return a.reverse().map((b) => b ^ 1);
  }); // XOR operation
};

const flipAndInvertImage = function (A) {
  for (let row in A) {
    A[row] = A[row].reverse();
    A[row] = A[row].map((x) => 1 - x);
  }
  return A;
};

const flipAndInvertImage = function (A) {
  let C = A[0].length;
  for (let row of A)
    for (let i = 0; i < (C + 1) / 2; ++i) {
      let tmp = row[i] ^ 1;
      row[i] = row[C - 1 - i] ^ 1;
      row[C - 1 - i] = tmp;
    }

  return A;
};
