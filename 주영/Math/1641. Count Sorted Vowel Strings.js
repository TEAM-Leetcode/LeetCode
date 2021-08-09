/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let a = 1,
    e = 1,
    i = 1,
    o = 1,
    u = 1;

  for (let j = 1; j < n; j++) {
    a = a + e + i + o + u;
    e = e + i + o + u;
    i = i + o + u;
    o = o + u;
  }
  return a + e + i + o + u;
};
// 끝에 나오는 문자

// 1개일 때
// a e i o u -> 5

// 2개일 때
// a - 5개 = 1 + 1 + 1 + 1 + 1
// e - 4개 = 1 + 1 + 1 + 1
// i - 3개 = 1 + 1 + 1
// o - 2개 = 1 + 1
// u - 1개 = 1

// 3개일 때
// a - 15 = 5 + 4 + 3 + 2 + 1
// e - 11 = 4 + 3 + 2 + 1
// i - 7 = 3 + 2 + 1
// o - 3 = 2 + 1
// u - 1

// 4개일 때
// 이 패턴이 반복된다.

let n = 2;
countVowelStrings(n);
