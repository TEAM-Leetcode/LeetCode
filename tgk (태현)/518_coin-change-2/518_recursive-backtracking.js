/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    // base case
    if (amount < 0) {
        return 0;
    } else if (amount === 0) {
        return 1;
    }

    if (coins.length === 1) {
        return amount % coins[0] === 0 ? 1 : 0;
    }

    // recursive step
    return (
        change(amount, coins.slice(0, -1)) +
        change(amount - coins[coins.length - 1], coins)
    );
};

console.log(change(5, [1, 2, 5]));
console.log(change(20, [1, 5, 10]));
