// 처음 풀이 (O(NlogN))
var twoSum = function (nums, target) {
  let sorted = [...nums].sort((a, b) => a - b);

  let end = sorted.length - 1;
  let start = 0;
  let answer = [];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[start] + sorted[end] > target) {
      end--;
    } else if (sorted[start] + sorted[end] === target) {
      answer = [sorted[start], sorted[end]];
    } else {
      start++;
    }
  }

  answer = [nums.indexOf(answer[0]), nums.lastIndexOf(answer[1])];

  return answer;
};

var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
};

let nums = [3, 3];
let target = 6;
twoSum(nums, target);
