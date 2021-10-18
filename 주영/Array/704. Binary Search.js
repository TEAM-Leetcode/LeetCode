/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let pivot = Math.ceil((left + right) / 2);

    if (nums[pivot] === target) return pivot;
    else if (nums[pivot] < target) left = pivot + 1;
    else right = pivot - 1;
  }

  return -1;
};

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;

console.log(search(nums, target));
