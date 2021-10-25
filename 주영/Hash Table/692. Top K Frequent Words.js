/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (words, k) {
  let obj = {};

  for (let i = 0; i < words.length; i++) {
    if (!obj[words[i]]) obj[words[i]] = 1;
    else obj[words[i]]++;
  }

  let keys = Object.keys(obj);

  let sorted = keys.sort((a, b) => {
    let compareFunc = obj[b] - obj[a];
    return compareFunc === 0 ? a.localeCompare(b) : compareFunc;
  });

  let answer = sorted.slice(0, k);

  return answer;
};

let words = ['i', 'love', 'leetcode', 'i', 'love', 'coding'],
  k = 3;

topKFrequent(words, k);
