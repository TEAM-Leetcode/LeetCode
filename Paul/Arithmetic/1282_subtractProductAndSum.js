var n1 = 234;
// Output: 15

var n2 = 4421;
//Output: 21;

/**
 * @param {number}
 * @return {number}
 */
const subtractProductAndSumA = function (n) {
  let str = n.toString();
  let sum = +str[0];
  let product = +str[0];

  for (let i = 1; i < str.length; ++i) {
    sum += +str[i];
    product *= +str[i];
  }

  return product - sum;
};

// improved version
const subtractProductAndSumD = function (n) {
  let sum = 0;
  let product = 1;

  ('' + n).split('').forEach((val) => {
    sum += +val;
    product *= +val;
  });

  return product - sum;
};

// console.log(subtractProductAndSumA(n1));
// console.log(subtractProductAndSumAn2));

const subtractProductAndSumB = function (n) {
  let digits = (Math.log10(n) + 1) | 0; // find the number of digits in the integer https://stackoverflow.com/questions/9049677/how-does-x0-floor-the-number-in-javascript
  let first = (n / Math.pow(10, digits - 1)) | 0;
  let sum = first;
  let product = first;

  for (let i = digits - 1; i > 0; --i) {
    let digit = (Math.floor(n % Math.pow(10, i)) / Math.floor(Math.pow(10, i - 1))) | 0;
    sum += digit;
    product *= digit;
  }

  return product - sum;
};

console.log(subtractProductAndSumB(n1));
console.log(subtractProductAndSumB(n2));

// improved arithmetic
const subtractProductAndSumC = (n) => {
  let sum = 0;
  let prod = 1;
  while (n > 0) {
    const mod = n % 10;
    sum += mod;
    prod *= mod;
    n = Math.floor(n / 10);
  }
  return prod - sum;
};
