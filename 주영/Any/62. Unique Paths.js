const uniquePaths = (m, n) => {
  let currentRow = [];

  for (let i = 0; i < n; i++) {
    currentRow[i] = 1;
  }

  for (let row = 1; row < m; row++) {
    for (let j = 1; j < n; j++) {
      currentRow[j] = currentRow[j] + currentRow[j - 1];
    }
  }
  return currentRow[n - 1];
};

// Math
const solution = (m, n) => {
  let big = Math.max(m - 1, n - 1);
  let small = Math.min(m - 1, n - 1);
  let sum = big + small;

  // factorial
  let ans = 1;
  for (let i = sum; i > big; i--) ans *= i;
  for (let i = small; i > 1; i--) ans /= i;

  return ans;
};

let m = 3,
  n = 7;

uniquePaths(m, n);
