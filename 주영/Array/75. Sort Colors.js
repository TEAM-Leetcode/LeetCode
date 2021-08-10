// Discussion
// 나중에 다시 풀어봐야 할 문제
function sortColors(nums) {
  let low = 0;
  let high = nums.length - 1;

  for (let i = 0; i <= high; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[low]] = [nums[low], nums[i]]; // swap
      low++;
    } else if (nums[i] == 2) {
      [nums[i], nums[high]] = [nums[high], nums[i]];
      high--;
      i--;
    }
  }
}

let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
