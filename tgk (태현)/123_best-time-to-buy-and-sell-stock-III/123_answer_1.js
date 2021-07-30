/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // MAX TIME LIMIT EXCEEDED

    /**
     * Let dp[k][i] be the maximum profit on ith day with at most k transactions
     * If we know all the instance of dp before k and i, we can solve for dp[k][i]
     *
     * Case 1: We do not trade our stock at ith day
     * Our profit would be same as dp[k][i - 1]
     *
     * Case 2: We do trade our stock at ith day
     * Our profit would be prices[i] - prices[j] + dp[k - 1][j - 1]
     * (We sell at ith day, but we bought at jth day, previous maximum profit would carry over as well)
     * In order to maximize our profit, we need to make prices[j] - dp[k - 1][j - 1] smallest
     * prices[i] - prices[j] + dp[k - 1][j - 1] = prices[i] - (prices[j] - dp[k - 1][j - 1])
     */

    if (prices.length === 1) {
        return 0;
    }

    const dp = new Array(3)
        .fill(null)
        .map(() => new Array(prices.length).fill(0));

    for (let k = 1; k < 3; k++) {
        for (let i = 1; i < prices.length; i++) {
            let min = prices[0];
            for (let j = 1; j <= i; j++) {
                min = Math.min(min, prices[j] - dp[k - 1][j - 1]);
            }
            dp[k][i] = Math.max(dp[k][i - 1], prices[i] - min);
        }
    }

    return dp[2][prices.length - 1];
};

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
