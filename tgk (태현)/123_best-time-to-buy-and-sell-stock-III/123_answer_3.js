/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    /**
     * From previous answer, we can flip k-loop and i-loop
     *
     * It does require to track 3 min (k = 0,1,2) at the same time...
     */

    if (prices.length === 1) {
        return 0;
    }

    const dp = new Array(3)
        .fill(null)
        .map(() => new Array(prices.length).fill(0));

    const min = new Array(3).fill(prices[0]);

    for (let i = 1; i < prices.length; i++) {
        for (let k = 1; k < 3; k++) {
            min[k] = Math.min(min[k], prices[i] - dp[k - 1][i - 1]);
            dp[k][i] = Math.max(dp[k][i - 1], prices[i] - min[k]);
        }
    }

    return dp[2][prices.length - 1];
};

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
