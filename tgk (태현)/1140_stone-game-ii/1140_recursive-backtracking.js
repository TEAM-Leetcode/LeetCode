/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
    const n = piles.length;

    if (n === 0) return 0;

    const sums = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        sums[i] = (sums[i + 1] ?? 0) + piles[i];
    }

    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

    return helper(piles, dp, sums, 0, 1);
};

/**
 * @param {number[]} piles
 * @param {number[][]} dp
 * @param {number[]} sums
 * @param {number} i
 * @param {number} M
 * @return {number}
 */
var helper = function (piles, dp, sums, i, M) {
    if (i === piles.length) return 0;

    if (2 * M >= piles.length - i) return sums[i];

    if (dp[i][M]) return dp[i][M];

    let min = Infinity;

    for (let j = 1; j <= 2 * M; j++) {
        min = Math.min(min, helper(piles, dp, sums, i + j, Math.max(j, M)));
    }

    return (dp[i][M] = sums[i] - min);
};

console.log(stoneGameII([1]));
