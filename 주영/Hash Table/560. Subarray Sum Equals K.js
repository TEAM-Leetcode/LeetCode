// 다시 풀어야 할 문제
const subarraySum = (nums, k) => {
  let arr = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    arr.push(sum);
  }

  let obj = {};

  for (let j = 0; j < arr.length; j++) {
    if (obj[arr[j]]) obj[arr[j]].push(j);
    else obj[arr[j]] = [j];
  }

  console.log('arr: ', arr);
  console.log('obj: ', obj);
  obj[0] = -1;

  // key와 짝이 될 수 있는 (ex: 6, 16) 다른 key를 찾아야 함.

  let cnt = 0;

  for (let a = 0; a < arr.length; a++) {
    if (obj[arr[a] - k]) cnt++;
  }

  console.log('cnt: ', cnt);
  return cnt;
};

let nums = [6, 3, 2, 5, 3, -3];
let arr = [6, 9, 11, 16, 19, 16];
let k = 10;

subarraySum(nums, k);
