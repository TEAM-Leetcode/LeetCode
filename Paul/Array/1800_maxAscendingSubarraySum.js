var nums = [10, 20, 30, 5, 10, 50];
var nums2 = [12, 17, 15, 13, 10, 11, 12];
var nums3 = [100, 10, 1];

const maxAscendingSum = function (nums) {
  let result = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];

    result < sum && (result = sum);

    if (nums[i + 1] <= nums[i]) {
      sum = 0;
    }
  }

  return result;
};

var maxAscendingSum11 = function (nums) {
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

console.log(maxAscendingSum(nums));
console.log(maxAscendingSum(nums2));
console.log(maxAscendingSum(nums3));
