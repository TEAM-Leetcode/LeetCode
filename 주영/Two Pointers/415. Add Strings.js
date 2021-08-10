var addStrings = function (num1, num2) {
  if (num2.length > num1.length) return addStrings(num2, num1);
  let zero = 48;
  let i = num1.length - 1;
  let j = num2.length - 1;
  let flag = 0;
  let answer = '';

  while (i >= 0) {
    // charAt() 함수는 문자열에서 특정 인덱스에 위치하는  유니코드 단일문자를 반환합니다.
    let digit1 = i >= 0 ? num1.charCodeAt(i) - zero : 0;
    let digit2 = j >= 0 ? num2.charCodeAt(j) - zero : 0;

    let sum = flag + digit1 + digit2;
    flag = 0;
    // sum이 10을 넘어갈 때를 생각해야 함.
    if (sum > 9) {
      flag = 1;
      sum %= 10;
    }
    answer = `${sum}${answer}`;

    i--;
    j--;
  }

  if (flag > 0) answer = `${flag}${answer}`;

  return answer;
};

let num1 = '11';
let num2 = '123';

addStrings(num1, num2);
