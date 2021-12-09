/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0];

  let minDp = new Array(nums.length).fill(1);
  let maxDp = new Array(nums.length).fill(1);

  minDp[0] = nums[0];
  maxDp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let cur = nums[i];

    minDp[i] = Math.min(minDp[i - 1] * cur, maxDp[i - 1] * cur, cur);
    maxDp[i] = Math.max(minDp[i - 1] * cur, maxDp[i - 1] * cur, cur);
  }

  console.log('minDp: ', minDp);
  console.log('maxDp: ', maxDp);

  console.log(Math.max(...minDp, ...maxDp));

  return Math.max(...maxDp);
};

let nums = [-2, -3, 7];

maxProduct(nums);
