var firstUniqChar = function (s) {
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) obj[s[i]]++;
    else obj[s[i]] = 1;
  }

  let answer = '';

  for (let [key, value] of Object.entries(obj)) {
    if (value === 1) {
      answer = key;
      break;
    }
  }

  return answer ? s.indexOf(answer) : -1;
};

let s = 'leetcode';
firstUniqChar(s);
