var isHappy = function (n) {
  let cache = {};

  while (n > 1 && !cache[n]) {
    cache[n] = true; // 이미 계산한 부분은 true로 전환시켜두기
    n = String(n)
      .split('')
      .reduce((acc, cur, i) => acc + Math.pow(cur, 2), 0);
  }

  return n === 1;
};

let n = 192;
isHappy(n);
