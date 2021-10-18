// DP
var coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  console.log(dp[dp.length - 1]);

  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
};

// F(11) -> F(9) / F(8) / F(6)

// F(11) = Math.min(F(9), F(8), F(6))

//F(n) = Math.min(F(n - cost[i]), F(n - cost[i + 1]), F(n - cost[i + 2])) + 1

let coins = [1, 2, 5];
let amount = 11;

coinChange(coins, amount);
