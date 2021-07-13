// https://leetcode.com/problems/find-the-difference/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
  s = Array.from(s).sort();
  t = Array.from(t).sort();

  let index = 0;

  while (index < s.length) {
    if (s[index] !== t[index]) {
      return t[index];
    }

    index++;
  }

  return t[index];
};

const findTheDifference = function (s, t) {
  let letters = s.split('').sort();
  return Array.from(t)
    .sort()
    .find((char, i) => char !== letters[i]);
};

// hashmap - using Object
const findTheDifference = function (s, t) {
  let map = {};
  s = Array.from(s);
  t = Array.from(t);

  for (let i = 0; i < s.length; ++i) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }

  for (let i = 0; i < t.length; ++i) {
    if (!map[t[i]]) {
      return t[i];
    } else {
      if (map[t[i]] > 0) {
        map[t[i]]--;
      } else {
        return t[i];
      }
    }
  }
};

// hashmap -using Map
const findTheDifference = function (s, t) {
  let map = new Map();

  Array.from(s).forEach((char) => {
    if (!map.get(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  });

  for (let i = 0; i < t.length; ++i) {
    if (!map.get(t[i])) {
      return t[i];
    } else {
      if (map.get(t[i]) > 0) {
        map.set(t[i], map.get(t[i]) - 1);
      } else {
        return t[i];
      }
    }
  }
};

// XOR operation
const findTheDifference = function (s, t) {
  // Initialize ch with 0, because 0 ^ X = X
  // 0 when XORed with any bit would not change the bits value.
  let value = 0;

  // XOR all the characters of both s and t.
  for (let i = 0; i < s.length; i++) {
    value ^= s.charCodeAt(i);
    console.log('s string: ', value, String.fromCharCode(value));
  }

  for (let i = 0; i < t.length; i++) {
    value ^= t.charCodeAt(i);
    console.log('i string: ', value, String.fromCharCode(value));
  }

  // What is left after XORing everything is the difference.
  return String.fromCharCode(value);
};

console.log(findTheDifference('abcd', 'abcde'));
