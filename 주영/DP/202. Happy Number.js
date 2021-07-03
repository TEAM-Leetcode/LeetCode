var isHappy = function (n) {
  let cache = {};
  let cnt = 1;

  while (n > 1 && !cache[n]) {
    // 이미 cache객체에 저장되어 있는 값은 true로 만들기
    cache[n] = true;
    // false가 되는 순간 반복문을 빠져나가는 조건 추가하기(infinite loop방지)
    console.log(`${cnt++} : ${cache[n]}`);

    n = String(n)
      .split('')
      .reduce((acc, cur, i) => acc + Math.pow(cur, 2), 0);
    console.log('n: ', n);
  }

  return n === 1;
};

let n = 1923416;
isHappy(n);

// 다른 풀이
var isHappy = function (n) {
  /**
   * Not necessary I think, but the OJ algorithm appears
   * to return false for non-positive numbers also.
   */
  if (n < 1) return false;

  /**
   * This set will store numbers as we create them.
   * If we create a number already in the set, we
   * assume we're in an infinite cycle.
   */
  let set = new Set();

  while (!set.has(n)) {
    set.add(n);
    let s = n.toString();
    n = 0;
    for (let i = 0; i < s.length; ++i) {
      n += squares[s[i]];
    }
    if (n == 1) return true;
  }

  return false;
};
