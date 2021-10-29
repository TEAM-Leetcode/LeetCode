/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let sum = 0;
  let sumArr = [];

  for (let a = 0; a < nums.length; a++) {
    if (nums[a] === 0) nums[a] = -1;
    sum += nums[a];
    sumArr.push(sum);
  }

  let obj = {};
  obj[0] = [-1];

  for (let i = 0; i < sumArr.length; i++) {
    let cur = sumArr[i];
    obj[cur] ? obj[cur].push(i) : (obj[cur] = [i]);
  }
  console.log(sumArr);

  console.table(obj);
  let maxLen = 0;

  for (let [key, value] of Object.entries(obj)) {
    let len = value[value.length - 1] - value[0];
    maxLen = Math.max(maxLen, len);
  }

  console.log(maxLen);

  return maxLen;
};

let nums = [1, 0, 1, 1, 1, 0, 0, 1, 1];
findMaxLength(nums);
