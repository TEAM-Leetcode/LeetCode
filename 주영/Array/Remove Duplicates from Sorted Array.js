// O(N) -> 스스로 못 푼 방식(Two Pointers)
const removeDuplicates = (nums) => {
  let i = 0;

  if (nums.length === 0) return 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

// O(N^2)
const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
};

// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// const set = new Set(nums);
// const reSet = [...set];
// console.log('reSet: ', reSet);
