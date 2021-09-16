/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  // there is only 1 way to make 0
  if (amount === 0) return 1;
  // if no coins, we can't make any amount
  if (coins === 0) return 0;

  // initialise  dp array to 0
  const dp = Array(amount + 1).fill(0);

  // start at 1 - there is always only 1 way to make zero
  dp[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = dp[j - coin] + dp[j];
    }
  }
  return dp[amount];
};
