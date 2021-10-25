const decodeString = s => {
  let stack = [];
  let numStack = [];

  let num = 0;
  let str = '';

  for (let i = 0; i < s.length; i++) {
    // 여는 괄호가 나왔을 때 (stack과 numStack에 push할 때)
    if (s[i] === '[') {
      stack.push(str);
      numStack.push(num);
      str = '';
      num = 0;
      continue;
    }
    // 닫는 괄호가 나왔을 때 (str을 만들 때)
    else if (s[i] === ']') {
      str = stack.pop() + str.repeat(numStack.pop());
      continue;
    }
    // 숫자가 나왔을 때
    if (s[i] < 97 || s[i] > 122) num = num * 10 + Number(s[i]);
    // 알파벳이 나왔을 때
    else str += s[i];
  }
  return str;
};

let s = '3[a2[c]]';
decodeString(s);
