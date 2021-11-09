var rob = function (nums) {
  let dp = [];

  if (nums.length === 1) return nums[0];

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    // i번째 집을 털었을 때 가질 수 있는 돈의 최댓값 = dp[i]
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  // console.log(dp);
  return dp[dp.length - 1];
};

let nums = [0];
rob(nums);

// F(n) = Math.max(F(n-1), F(n-2) + nums[i]);
