// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  let map = new Map();

  for (word of strs) {
    let str = word.split('').sort().join('');

    map.get(str) || map.set(str, []);
    map.get(str).push(word);
  }

  let result = [];

  for (let value of map.values()) {
    result.push(value);
  }

  return result;
};

// leetcode solution - counting
const groupAnagrams = function (strs) {
  let res = {};
  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let char of str) count[char.charCodeAt() - 97]++;
    let key = count.join('#');
    res[key] ? res[key].push(str) : (res[key] = [str]);
  }
  return Object.values(res);
};
// Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
// Space Complexity: O(n)
