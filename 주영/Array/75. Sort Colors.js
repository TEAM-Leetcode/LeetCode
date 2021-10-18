function sortColors(nums) {
  let isZero = 0;
  let isTwo = nums.length - 1;
  let i = 0;

  while (i <= isTwo) {
    let num = nums[i];

    if (nums[i] === 0) {
      nums[i] = nums[isZero];
      nums[isZero] = num;
      isZero++;
      i++;
    } else if (nums[i] === 2) {
      nums[i] = nums[isTwo];
      nums[isTwo] = num;
      isTwo--;
    } else i++;
  }
  console.log('nums:', nums);
  return nums;
}

let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);

// swap 함수 사용한 풀이
function sortColors(nums) {
  const swap = (i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  };

  let isZero = 0;
  let isTwo = nums.length - 1;
  let i = 0;

  while (i <= isTwo) {
    if (nums[i] === 0) {
      swap(isZero, i);
      isZero++;
      i++;
    } else if (nums[i] === 2) {
      swap(i, isTwo);
      isTwo--;
    } else i++;
  }
  console.log('nums:', nums);
  return nums;
}

let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
