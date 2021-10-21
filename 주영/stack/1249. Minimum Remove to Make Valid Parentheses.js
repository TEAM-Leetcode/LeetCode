var minRemoveToMakeValid = function (s) {
  let stack = [];
  let answer = [...s];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(i);
    else if (s[i] === ')') {
      stack.length ? stack.pop() : (answer[i] = '');
    }
  }
  if (stack.length > 0) {
    while (stack.length) answer[stack.pop()] = '';
  }

  // console.log('답: ', answer.join(''));
  return answer.join('');
};

s = '))((';
minRemoveToMakeValid(s);
