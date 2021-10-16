/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) sum += nums[i];

  let leftSum = 0;
  let rightSum = sum;
  let pastPivot = 0;

  for (let j = 0; j < nums.length; j++) {
    let pivot = nums[j];

    rightSum -= pivot;
    console.log('rightSum: ', rightSum);
    leftSum += pastPivot;
    console.log('leftSum: ', leftSum);

    if (leftSum === rightSum) return j;
    pastPivot = pivot;
  }
  return -1;
};
let nums = [1, 7, 3, 6, 5, 6];
pivotIndex(nums);
