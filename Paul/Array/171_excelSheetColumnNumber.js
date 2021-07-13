// https://leetcode.com/problems/excel-sheet-column-number/

/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function (columnTitle) {
  let map = new Map();
  let result = 0;

  // create a map of letter : columnNumber pair
  for (let i = 0; i < 26; ++i) {
    map.set(String.fromCharCode(65 + i), i + 1);
  }

  for (let i = 0; i < columnTitle.length; ++i) {
    result += Math.pow(26, columnTitle.length - i - 1) * map.get(columnTitle[i]);
  }

  return result;
};

// without the map
const titleToNumber = function (columnTitle) {
  let result = 0;

  for (let i = 0; i < columnTitle.length; ++i) {
    result += Math.pow(26, columnTitle.length - i - 1) * (columnTitle.charCodeAt(i) - 64); // A = 65
  }

  return result;
};

// from left to right
// If we want to get the decimal value of string "1337", we can iteratively find the result by scanning the string from left to right as follows:

// '1' = 1
// '13' = (1 x 10) + 3 = 13
// '133' = (13 x 10) + 3 = 133
// '1337' = (133 x 10) + 7 = 1337
// Instead of base-10, we are dealing with base-26 number system. Based on the same idea, we can just replace 10s with 26s and convert alphabets to numbers.

// For a title "LEET":

// L = 12
// E = (12 x 26) + 5 = 317
// E = (317 x 26) + 5 = 8247
// T = (8247 x 26) + 20 = 214442
const titleToNumber = function (columnTitle) {
  let result = 0;

  for (let i = 0; i < columnTitle.length; ++i) {
    result *= 26;
    result += columnTitle.charCodeAt(i) - 64;
  }

  return result;
};
