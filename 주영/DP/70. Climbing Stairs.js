var climbStairs = function (n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp[n - 1]);
  return dp[n - 1];
};

let n = 3;

climbStairs(n);

// F(1) = 1
// F(2) = 2
