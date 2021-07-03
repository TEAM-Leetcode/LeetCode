var nums1 = [4, 1, 2];
var nums2 = [1, 3, 4, 2];
// Output: [-1,3,-1]

var nums3 = [2, 4];
var nums4 = [1, 2, 3, 4];
// Output: [3,-1]

var nums5 = [4, 1, 2];
var nums6 = [1, 2, 3, 4];
// Output: [-1,2,3]

const nextGreaterElementA = function (nums1, nums2) {
  return nums1.map((num) => {
    let idx = nums2.indexOf(num);

    for (let i = idx + 1; i < nums2.length; ++i) {
      if (nums2[idx] < nums2[i]) {
        return nums2[i];
      }
    }

    return -1;
  });
};

// console.log(nextGreaterElement(nums1, nums2));
// console.log(nextGreaterElement(nums3, nums4));
// console.log(nextGreaterElement(nums5, nums6));

// leetcode solutions
var nextGreaterElementB = function (findNums, nums) {
  return findNums.map((n) => {
    let found = nums.indexOf(n);

    if (found !== -1) {
      // find the next greater element's index
      while (nums[++found] < n) {}
      // -1 if not found
      if (found >= nums.length) found = -1;
      else found = nums[found];
    }

    return found;
  });
};

// console.log(nextGreaterElementB(nums1, nums2));
// console.log(nextGreaterElementB(nums3, nums4));
console.log(nextGreaterElementB(nums5, nums6));

// need insane amount of time to understand this
var nextGreaterElementC = function (nums1, nums2) {
  const map = {};
  const stack = [];
  nums2.forEach((n) => {
    while (stack.length > 0 && stack[stack.length - 1] < n) {
      map[stack.pop()] = n;
    }
    stack.push(n);
  });
  return nums1.map((n) => map[n] || -1);
};
