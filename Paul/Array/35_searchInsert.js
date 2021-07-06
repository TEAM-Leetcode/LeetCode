var nums1 = [1, 3, 5, 6],
  target1 = 5;
// Output: 2

var nums2 = [1, 3, 5, 6],
  target2 = 2;
// Output: 1

var nums3 = [1, 3, 5, 6],
  target3 = 7;
// Output: 4

var nums4 = [1, 3, 5, 6],
  target4 = 0;
// Output: 0

var nums5 = [1],
  target5 = 0;
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsertA = function (nums, target) {
  let idx = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (i === nums.length - 1) {
      idx = nums.length;
    } else if (nums[i] < target) {
      idx = i;
    } else if (nums[i] >= target) {
      idx = i;
      break;
    }
  }

  return idx;
};

// console.log(searchInsertA(nums1, target1));
// console.log(searchInsertA(nums2, target2));
// console.log(searchInsertA(nums3, target3));
// console.log(searchInsertA(nums4, target4));
// console.log(searchInsertA(nums5, target5));

// binary search
const searchInsertB = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let pivot = ((start + end) / 2) | 0;

    if (nums[pivot] === target) {
      return pivot;
    }

    if (nums[pivot] > target) {
      end = pivot - 1;
    } else {
      start = pivot + 1;
    }
  }

  return start;
};

console.log(searchInsertB(nums1, target1));
console.log(searchInsertB(nums2, target2));
console.log(searchInsertB(nums3, target3));
console.log(searchInsertB(nums4, target4));
console.log(searchInsertB(nums5, target5));
