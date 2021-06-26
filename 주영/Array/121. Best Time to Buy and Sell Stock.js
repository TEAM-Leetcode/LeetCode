var maxProfit = function (prices) {
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        i = j - 1;
        break;
      }
      let diff = prices[j] - prices[i];
      max = Math.max(max, diff);
      if (j === prices.length - 1) return max;
    }
  }
  return max;
};

var maxProfit = function (prices) {
  let min = 100000; // 큰 수 지정
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    // 최솟값을 찾는 로직
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};
