/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === '0' ? a++ : b++;
    a = Math.min(a, b);
    console.log('a: ', a);
    console.log('b: ', b);
  }
  return a;
};

s = '00110';
minFlipsMonoIncr(s);
