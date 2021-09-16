/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  //   let obj = arrT.reduce((acc, cur) => ({ ...acc, [cur]: 1 }), {});
  let obj = {};

  for (let i = 0; i < t.length; i++) {
    if (obj[t[i]]) obj[t[i]]++;
    else obj[t[i]] = 1;
  }
};

// let s = 'ADOBECODEBANC',
//   t = 'ABC';

let s = 'ADOBECODEBANC',
  t = 'ABC';
minWindow(s, t);
