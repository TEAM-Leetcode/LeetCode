/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;

  let map = new Map();
  for (let i = 0; i < s.length; i++) map.set(s[i], -1);

  let max = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) start = Math.max(start, map.get(s[i]) + 1);

    map.set(s[i], i);
    max = Math.max(max, i - start + 1);
  }
  //   console.table(map);
  //   console.log('max: ', max);

  return max;
};

let s = 'abcabcbb';

lengthOfLongestSubstring(s);
