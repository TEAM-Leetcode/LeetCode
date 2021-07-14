// https://leetcode.com/problems/sort-colors/
// a.k.a. dutch national flag problem

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  let zero = [],
    one = [],
    two = [];

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      zero.push(0);
    } else if (nums[i] === 1) {
      one.push(1);
    } else {
      two.push(2);
    }
  }

  nums.splice(0, nums.length, ...zero, ...one, ...two);
};

// selection sort
const sortColors = function (nums) {
  let length = nums.length;

  for (let i = 0; i < length; ++i) {
    let min = i;

    for (let j = i + 1; j < length; ++j) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }

    if (min !== i) {
      let temp = nums[i];
      nums[i] = nums[min];
      nums[min] = temp;
    }
  }
};

// dual-pivot quick sort
const sortColors = function (nums) {
  let lo = 0,
    hi = nums.length - 1,
    i = 0;

  while (i <= hi) {
    if (nums[i] === 0) {
      swap(nums, lo++, i++);
    } else if (nums[i] === 2) {
      swap(nums, i, hi--);
    } else if (nums[i] === 1) {
      i++;
    }
  }
};

const swap = function (nums, i, j) {
  let t = nums[i];
  nums[i] = nums[j];
  nums[j] = t;
};

// leetcode solution (3 pointers) -> O(N)
const sortColors = function (nums) {
  let p0 = 0,
    p2 = nums.length - 1,
    curr = 0;

  while (curr <= p2) {
    if (nums[curr] === 0) {
      swap(nums, curr++, p0++);
    } // swap curr and p0 elemetns and move both pointers to the right
    else if (nums[curr] === 2) {
      swap(nums, curr, p2--);
    } // swap curr and p2 and move pointer p2 to the left
    else if (nums[curr] === 1) {
      curr++;
    }
  }
};
