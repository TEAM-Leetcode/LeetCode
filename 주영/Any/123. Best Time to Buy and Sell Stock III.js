var maxProfit = function (prices) {
  let min = MAX_SAFE_INTEGER;
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    // 최솟값을 찾는 로직
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};
