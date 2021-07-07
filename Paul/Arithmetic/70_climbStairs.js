// https://leetcode.com/problems/climbing-stairs/submissions/
// https://www.youtube.com/watch?v=5o-kdjv7FD0

var n1 = 2;
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

var n2 = 3;
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @return {number}
 */
// recursive -> not passable
const climbStairsA = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return climbStairs(n - 1) + climbStairs(n - 2);
};

// dynamic programming
const climbStairsB = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let array = [];
    array[0] = 1;
    array[1] = 1;

    for (let i = 2; i <= n; ++i) {
      array[i] = array[i - 1] + array[i - 2];
    }

    return array[n];
  }
};

console.log(climbStairsB(45));
