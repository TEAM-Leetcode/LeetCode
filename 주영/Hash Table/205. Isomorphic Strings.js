var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      let cur = obj[s[i]];
      if (cur !== t[i]) return false;
    }
    // 없다면
    else {
      obj[s[i]] = t[i];
    }
  }

  console.table(obj);

  let noDups = new Set([...Object.values(obj)]).size;
  let dups = Object.values(obj).length;

  //   console.log('길이: ', new Set([...Object.values(obj)]).size);
  //   console.log('길이: ', Object.values(obj).length);

  return noDups === dups;
};

let s = 'badc',
  t = 'badd';

isIsomorphic(s, t);
