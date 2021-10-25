var addStrings = function (num1, num2) {
  if (num2.length > num1.length) return addStrings(num2, num1);

  let j = num2.length - 1;
  let answer = '';
  let carry = 0;

  for (let i = num1.length - 1; i >= 0; i--) {
    let digit1 = i < 0 ? 0 : num1[i] - 0;
    let digit2 = j < 0 ? 0 : num2[j] - 0;

    let sum = carry + digit1 + digit2;
    carry = 0;

    if (sum >= 10) {
      carry = 1;
      sum %= 10;
    }

    answer = `${sum}${answer}`;
    j--;
  }

  if (carry > 0) answer = `${carry}${answer}`;
  return answer;
};

let num1 = '456';
let num2 = '77';

addStrings(num1, num2);
