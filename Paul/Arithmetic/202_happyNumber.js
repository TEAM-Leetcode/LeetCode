var n1 = 19;
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

var n2 = 2;
// Output: false

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappyA = function (n) {
  let m = [];

  const recur = function (n, m) {
    if (n === 1) {
      return true;
    }

    if (m.includes(n)) {
      return false;
    } else {
      m.push(n);
    }

    let result = ('' + n).split('').reduce((acc, curr) => acc + Math.pow(curr, 2), 0);

    return recur(result, m);
  };

  return recur(n, m);
};

console.log(isHappyA(n1));
console.log(isHappyA(n2));
console.log(isHappyA(116));

// leetcode solution
// hash
var isHappyB = function (n) {
  var seen = {};
  while (n !== 1 && !seen[n]) {
    seen[n] = true;
    n = sumOfSquares(n);
  }
  return n === 1;
};

function sumOfSquares(numString) {
  return numString
    .toString()
    .split('')
    .reduce(function (sum, num) {
      return sum + Math.pow(num, 2);
    }, 0);
}

// cycle
var isHappyC = function (n) {
  function getSum(n) {
    let sum = 0;
    while (n > 0) {
      const d = n % 10;
      n = (n - d) / 10;
      sum += d * d;
    }
    return sum;
  }

  let slow = n,
    fast = n;
  do {
    slow = getSum(slow);
    fast = getSum(getSum(fast));
  } while (slow != fast);

  return slow === 1;
};
