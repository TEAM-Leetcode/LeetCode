var s1 = 'III';
// Output: 3

var s2 = 'IV';
// Output: 4

var s3 = 'IX';
Output: 9;

var s4 = 'LVIII';
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

var s5 = 'MCMXCIV';
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {string} s
 * @return {number}
 */
const romanToIntA = function (s) {
  let result = 0;

  const convert = function (c) {
    let value;

    switch (c) {
      case 'I':
        value = 1;
        break;
      case 'V':
        value = 5;
        break;
      case 'X':
        value = 10;
        break;
      case 'L':
        value = 50;
        break;
      case 'C':
        value = 100;
        break;
      case 'D':
        value = 500;
        break;
      case 'M':
        value = 1000;
        break;
    }

    return value;
  };

  for (let i = 0; i < s.length; ++i) {
    if (convert(s[i]) < convert(s[i + 1])) {
      result -= convert(s[i]);
    } else {
      result += convert(s[i]);
    }
  }

  return result;
};

console.log(romanToIntA(s1));
console.log(romanToIntA(s2));
console.log(romanToIntA(s3));
console.log(romanToIntA(s4));
console.log(romanToIntA(s5));

// leetcode solution
var romanToIntB = function (s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = map[s[i]],
      next = map[s[i + 1]];
    if (curr < next) num -= curr;
    else num += curr;
  }
  return num;
};
