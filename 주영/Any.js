var isAnagram = function (s, t) {
  let obj = {};

  if (s.length !== t.length) return false;

  for (let item of s) {
    if (obj[item]) obj[item]++;
    else obj[item] = 1;
  }

  for (let item of t) {
    if (obj[item]) obj[item]--;
  }

  const values = Object.values(obj);

  for (let item of values) {
    if (item !== 0) return false;
  }

  return true;
};

let s = 'anagram';
let t = 'nagaram';

isAnagram(s, t);
