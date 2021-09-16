/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] === nums[i]) {
      answer = [nums[i], i + 1];
    }
  }
  console.log('answer: ', answer);
  return answer;
};

let nums = [1, 2, 2, 4];
findErrorNums(nums);
