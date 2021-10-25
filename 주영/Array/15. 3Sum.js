var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let low = i + 1;
      let high = nums.length - 1;
      let sum = 0 - nums[i];

      while (low < high) {
        if (nums[low] + nums[high] === sum) {
          answer.push([nums[i], nums[low], nums[high]]);
          while (low < high && nums[low] === nums[low + 1]) low++;
          while (low < high && nums[high] === nums[high - 1]) high--;
          low++;
          high--;
        } else if (nums[low] + nums[high] < sum) {
          // 중복 스킵하기
          while (low < high && nums[low] === nums[low + 1]) low++;
          low++;
        } else {
          while (low < high && nums[high] === nums[high - 1]) high--;
          high--;
        }
      }
    }
  }
  console.log('answer: ', answer);
  return answer;
};

let nums = [-1, 0, 1, 2, -1, -4];
threeSum(nums);
