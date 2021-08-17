/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  return Number(num.toString().replace('6', '9'));
};

let num = 9669;
maximum69Number(num);
