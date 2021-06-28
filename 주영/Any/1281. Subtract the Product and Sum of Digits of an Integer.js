var subtractProductAndSum = function (n) {
  let num = String(n);
  let arr = num.split('');

  let multiple = 1;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    multiple *= arr[i];
    sum += Number(arr[i]);
  }
  return multiple - sum;
};

let n = 234;
subtractProductAndSum(n);
