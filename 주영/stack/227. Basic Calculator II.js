/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let num = '';
  let sign = '';
  let stack = [];

  for (let i = 0; i <= s.length; i++) {
    let cur = s[i];
    // 숫자가 나올 때
    if (!isNaN(s[i])) num += s[i];

    // 기호가 나올 때
    if (isNaN(s[i])) {
      num = Number(num);

      if (sign === '*') stack.push(stack.pop() * num);
      else if (sign === '/') stack.push(Math.trunc(stack.pop() / num));
      else if (sign === '+') stack.push(num);
      else if (sign === '-') stack.push(-num);
      else stack.push(num);
      sign = cur;
      num = '';
    }
    // console.log('num: ', num);
    // console.log('stack: ', stack);
  }
  //   console.log('answer: ', stack);
  //   console.log(stack.reduce((acc, cur) => acc + cur));
  return stack.reduce((acc, cur) => acc + cur);
};

let s = '14-3/2';
calculate(s);
