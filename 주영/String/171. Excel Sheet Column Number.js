var titleToNumber = function (s) {
  let charCodeBase = 'A'.charCodeAt(0) - 1; // 64
  // console.log(charCodeBase);
  let number = 0;
  const len = s.length;

  for (let i = 0; i < len; i++) {
    console.log(s.charCodeAt(i));
    number += (s.charCodeAt(i) - charCodeBase) * Math.pow(26, len - i - 1);
  }
  return number;
};

let columnTitle = 'BCM';
titleToNumber(columnTitle);

// B = 2 * 26 * 26
// C = 3 * 26
// M = 1 * 13

// 26 -> 10 진법으로 변환
