var nums1 = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicatesOne = function (nums) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      nums[++i] = nums[j];
    }
  }

  nums.length = ++i;
  return i;
};

// console.log(removeDuplicatesOne(nums1));
// console.log(nums1);

const removeDuplicatesTwo = (nums) => {
  nums.splice(0, nums.length, ...nums.filter((num, i, arr) => num !== arr[i + 1]));
  return nums.length;
};

// console.log(removeDuplicatesTwo(nums1));
// console.log(nums1);

const removeDuplicatesThree = (nums) => {
  nums.splice(0, nums.length, ...nums.filter((num, i, arr) => arr.indexOf(num) === i));
  return nums.length;
};

console.log(removeDuplicatesThree(nums1));
console.log(nums1);
