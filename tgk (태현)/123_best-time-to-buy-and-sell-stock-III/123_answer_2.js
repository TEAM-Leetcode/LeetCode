/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    /**
     * At previous answer, we calculate min every time i is updated
     *
     * We can save the previous min calculated at specific i, and update only if buying and selling
     * at ith day at the same time is actually better than calculated min
     */

    if (prices.length === 1) {
        return 0;
    }

    const dp = new Array(3)
        .fill(null)
        .map(() => new Array(prices.length).fill(0));

    for (let k = 1; k < 3; k++) {
        let min = prices[0];
        for (let i = 1; i < prices.length; i++) {
            min = Math.min(min, prices[i] - dp[k - 1][i - 1]);
            dp[k][i] = Math.max(dp[k][i - 1], prices[i] - min);
        }
    }

    return dp[2][prices.length - 1];
};

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
