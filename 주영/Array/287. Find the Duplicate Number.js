// 처음 풀이
var findDuplicate = function (nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) obj[nums[i]]++;
    else obj[nums[i]] = 1;
  }

  let answer = 0;

  for (let [key, value] of Object.entries(obj)) {
    if (value > 1) answer = key;
  }

  // console.log('answer: ', answer);
  return answer;
};

let nums = [1, 3, 4, 2, 2];
findDuplicate(nums);
