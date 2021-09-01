/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let obj = {};

  for (let item of s) {
    if (obj[item]) obj[item]++;
    else obj[item] = 1;
  }

  const keys = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

  let answer = '';
  for (let item of keys) {
    answer += item.repeat(obj[item]);
  }

  return answer;
};
let s = 'tree';
frequencySort(s);
