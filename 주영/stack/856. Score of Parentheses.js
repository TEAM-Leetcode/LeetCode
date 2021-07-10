// 내 풀이 + 뒤쪽 while문 다른 사람 답안 참고
var scoreOfParentheses = function (s) {
  let stack = [];
  let count;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push('(');
    } else {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
        stack.push(1);
      } else if (typeof stack[stack.length - 1] === 'number' && stack[stack.length - 2] === '(') {
        count = stack.pop();
        stack.pop();
        stack.push(2 * count);
      }
      while (
        stack.length &&
        typeof stack[stack.length - 1] === 'number' &&
        typeof stack[stack.length - 2] === 'number'
      ) {
        stack.push(stack.pop() + stack.pop());
      }
    }
  }
  return stack.pop();
};

const scoreOfParentheses = function (str) {
  // beginning score - 지정해주지 않으면 stack.pop을 할 때 오류가 날 것이다.
  let stack = [0];

  for (let s of str) {
    if (s === '(') {
      stack.push(0);
    } else {
      let top = stack.pop();
      let beforeTop = stack.pop();
      stack.push(beforeTop + Math.max(2 * top, 1));

      // Result of first else
      // [0, 1]

      // Result of second else
      // [0, 1, 1]

      // Result of third else
      // [0, 3]

      // Result of final else
      // [6]
    }
  }

  return stack.pop();
};
