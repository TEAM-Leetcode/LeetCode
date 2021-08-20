/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let answer = [];

  let j = 0;
  let k = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I') {
      answer.push(j);
      j++;
    } else {
      answer.push(s.length - k);
      k++;
    }
  }

  s[s.length - 1] === 'I' ? answer.push(answer[answer.length - 1] + 1) : answer.push(answer[answer.length - 1] - 1);

  return answer;
};

let s = 'IDID';
diStringMatch(s);

// 다른 사람의 풀이
const diStringMatch = (S) => {
  let num = [];

  let inc = 0;
  let dec = S.length;

  let i = 0;

  while (num.length !== S.length + 1) {
    num[i] = S[i] === 'D' ? dec-- : inc++;
    i++;
  }
  return num;
};
