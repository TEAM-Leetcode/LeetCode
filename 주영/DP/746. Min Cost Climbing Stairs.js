/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dp = [];
  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i < cost.length + 1; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  // console.log(dp[cost.length]);

  return dp[cost.length];
};

let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
minCostClimbingStairs(cost);
