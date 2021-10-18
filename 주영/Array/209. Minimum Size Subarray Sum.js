var minSubArrayLen = function (target, nums) {
  let start = 0;
  let sum = 0;
  let length = Number.MAX_SAFE_INTEGER;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    // console.log('pastSum: ', sum);

    while (sum >= target) {
      length = Math.min(length, end - start + 1);
      sum -= nums[start];
      // console.log('curSum: ', sum);
      start++;
    }
  }

  return length === Number.MAX_SAFE_INTEGER ? 0 : length;
};

let target = 7;
let nums = [2, 3, 1, 2, 4, 3];

minSubArrayLen(target, nums);
