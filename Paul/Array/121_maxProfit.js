var prices1 = [7, 1, 5, 3, 6, 4];
// Output: 5

var prices2 = [7, 6, 4, 3, 1];
// Output: 0

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitA = function (prices) {
  let max = 0;

  for (let i = 0; i < prices.length; ++i) {
    for (let j = i + 1; j < prices.length; ++j) {
      if (prices[j] > prices[i]) {
        max = max < prices[j] - prices[i] ? prices[j] - prices[i] : max;
      }
    }
  }

  return max;
};

// console.log(maxProfitA(prices1));
// console.log(maxProfitA(prices2));

// leetcode solution - O(n)
const maxProfitB = function (prices) {
  let max = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < prices.length; ++i) {
    min = Math.min(min, prices[i]);
    console.log('min: ', min);
    max = Math.max(max, prices[i] - min);
    console.log('max: ', max);
  }

  return max;
};

console.log(maxProfitB(prices1));
console.log(maxProfitB(prices2));
