// Sorting (O(NlogN))
var topKFrequent = function (nums, k) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) obj[nums[i]] = 1;
    else obj[nums[i]]++;
  }

  let keys = Object.keys(obj);
  let sorted = keys.sort((a, b) => obj[b] - obj[a]);
  sorted = sorted.map(num => Number(num));

  let answer = sorted.slice(0, k);
  // console.log(answer);
  return answer;
};

// No sorting
var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
};

let nums = [1, 1, 1, 2, 2, 3],
  k = 2;

topKFrequent(nums, k);
