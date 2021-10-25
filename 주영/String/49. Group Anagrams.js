var groupAnagrams = function (strs) {
  let obj = {};

  for (let i = 0; i < strs.length; i++) {
    let key = strs[i].split('').sort().join('');

    if (obj[key]) obj[key].push(strs[i]);
    else obj[key] = [strs[i]];
  }

  return Object.values(obj);
};

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
groupAnagrams(strs);
