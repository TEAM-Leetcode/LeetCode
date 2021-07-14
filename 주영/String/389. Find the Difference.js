// 느림
var findTheDifference = function (s, t) {
  let arr = t.split('');
  let i = 0;

  while (i < s.length) {
    let index = arr.indexOf(s[i]); // 느려짐1
    arr.splice(index, 1); // 느려짐2
    i++;
  }
  return arr[0];
};

// 느림
const findTheDifference = (s, t) => {
  arrS = s.split('');
  arrT = t.split('');

  arrS.sort();
  arrT.sort();

  let i = 0;

  while (i < arrT.length - 1 && arrS[i] === arrT[i]) {
    i++;
  }
  return arrT[i];
};

// reduce
var findTheDifference = function (s, t) {
  const sum1 = s.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  const sum2 = t.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  return String.fromCharCode(sum2 - sum1);
};

s = 'bacd';
t = 'abcde';

findTheDifference(s, t);
