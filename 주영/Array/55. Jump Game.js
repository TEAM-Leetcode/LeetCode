/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(i + nums[i], max);
    console.log('max: ', max);
    console.log('i: ', i);
    if (max === i) {
      console.log('걸렸냐?');
      break;
    }
  }
  if (max >= nums.length - 1) return true;
  else return false;
};

let nums = [3, 2, 1, 0, 4];
canJump(nums);
