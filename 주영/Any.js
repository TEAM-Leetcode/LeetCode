var romanToInt = function (s) {
  let answer = 0;

  const symbol = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  for (let i = 0; i < s.length; i++) {
    let num1 = symbol[s[i]];
    let num2 = symbol[s[i + 1]];

    if (num1 < num2) answer -= num1;
    else answer += num1;
  }
  return answer;
};

// 다른 사람의 풀이
var romanToInt = function (s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  return [...s].reduce((acc, cur, index) => {
    const current = map[cur];
    const next = map[s[index + 1]];
    return acc + (current < next ? -current : current);
  }, 0);
};
