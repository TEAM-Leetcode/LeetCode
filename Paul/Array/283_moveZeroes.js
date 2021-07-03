var nums = [0, 1, 0, 3, 12];

const moveZeroes = function (nums) {
  if (nums.length < 1) {
    return;
  }

  for (let i = 0; i < nums.length; ++i) {
    let isFound = false;

    if (nums[i] === 0) {
      for (let j = i + 1; j < nums.length && !isFound; ++j) {
        if (nums[j] !== 0) {
          nums[i] = nums[j];
          nums[j] = 0;
          isFound = true;
        }
      }
    }
  }
};

// moveZeroes(nums);
// console.log(nums);

const moveZeroesV2 = function (nums) {
  let idx = 0;

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      nums[i] = 0;
      idx++;
    }
  }
};

// moveZeroesV2(nums);
// console.log(nums);
// var nums = [0, 1, 0, 3, 12];
const moveZeroesV3 = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i];
    }
  }

  nums.fill(0, count);
};

// moveZeroesV3(nums);
// console.log(nums);

const moveZeroesV4 = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      count++;
    }
  }

  for (let i = 0; i < count; ++i) {
    nums.push(0);
  }
};

// moveZeroesV4(nums);
// console.log(nums);
