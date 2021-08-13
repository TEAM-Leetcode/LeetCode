var groupAnagrams = function (strs) {
  let obj = {};

  strs.map((str, i) => {
    let key = str.split('').sort().join('');

    if (!obj[key]) obj[key] = [str];
    else obj[key].push(str);
  });

  console.log(Object.values(obj));
  return Object.values(obj);
};

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
groupAnagrams(strs);
