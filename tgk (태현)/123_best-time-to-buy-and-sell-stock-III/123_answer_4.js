/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    /**
     * From previous answer, we can rollout the inner for-loop for more efficiency in terms of space
     */

    if (prices.length === 1) {
        return 0;
    }

    const dp = new Array(3)
        .fill(null)
        .map(() => new Array(prices.length).fill(0));

    let min1 = prices[0];
    let min2 = prices[0];

    for (let i = 1; i < prices.length; i++) {
        min1 = Math.min(min1, prices[i] - dp[0][i - 1]);
        dp[1][i] = Math.max(dp[1][i - 1], prices[i] - min1);

        min2 = Math.min(min2, prices[i] - dp[1][i - 1]);
        dp[2][i] = Math.max(dp[2][i - 1], prices[i] - min2);
    }

    return dp[2][prices.length - 1];
};

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
