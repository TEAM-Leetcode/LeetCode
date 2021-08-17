/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const dp = new Array(coins.length)
        .fill(-1)
        .map(() => new Array(amount + 1).fill(-1));

    // dp relation:
    // dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i]]

    for (let i = 0; i < coins.length; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= amount; i++) {
        dp[0][i] = i % coins[0] === 0 ? 1 : 0;
    }

    for (let i = 1; i < coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            dp[i][j] = dp[i - 1][j] + (dp[i][j - coins[i]] ?? 0);
        }
    }

    return dp[coins.length - 1][amount];
};

console.log(change(5, [1, 2, 5]));
console.log(change(20, [1, 5, 10]));
