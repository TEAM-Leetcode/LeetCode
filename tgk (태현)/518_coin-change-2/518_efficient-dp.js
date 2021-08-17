/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const dp = Array.from({ length: amount + 1 }, () => 0);
    dp[0] = 1;
    for (const coin of coins) {
        for (let i = coin; i < dp.length; i++) {
            dp[i] += dp[i - coin];
        }
    }
    return dp[amount];
};
