var maxAscendingSum = function (nums) {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    // asceding일 때
    if (nums[i] < nums[i + 1]) {
      sum += nums[i];
    }
    // 아닐 때
    else {
      sum += nums[i];
      max = Math.max(max, sum);
      sum = 0;
    }
  }
  return max;
};

// 다른 사람의 풀이
var maxAscendingSum = function (nums) {
  let max = nums[0],
    sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    if (curr <= nums[i - 1]) {
      sum = 0;
    }
    sum += curr;
    max = Math.max(max, sum);
  }
  return max;
};
