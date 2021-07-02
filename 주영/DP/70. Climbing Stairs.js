var climbStairs = function (n) {
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
  return dp[n];
};


let dp = {};
const climbStairs = (n) => {
    dp[1] = 1;
    dp[2] = 2;

  if (!(n in dp)) {
    dp[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }

  return dp[n];
};

f(3) = f(3-1) + f(3-2) = f(2) + f(1) = 2 + 1 = 3