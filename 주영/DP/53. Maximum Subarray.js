var maxSubArray = function (nums) {
  let localMax = nums[0];
  let finalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    localMax = Math.max(nums[i], localMax + nums[i]);
    if (localMax > finalMax) finalMax = localMax;
  }
  return finalMax;
};

var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];

  let dp = new Array(nums.length).fill(0);

  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let prevMax = dp[i - 1];
    let cur = nums[i];

    let max = Math.max(cur, prevMax + cur);
    dp[i] = max;
  }

  console.log(dp);
  return Math.max(...dp);
};

let nums = [5, 4, -1, 7, 8];

maxSubArray(nums);
