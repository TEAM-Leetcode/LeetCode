/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let obj = {};

  for (let i of magazine) {
    if (!obj[i]) obj[i] = 0;
    obj[i]++;
  }
  console.log(obj);

  for (let k of ransomNote) {
    if (!obj[k]) return false;
    obj[k]--;
  }
  return true;
};

// 다른 사람의 풀이
var canConstruct = function (ransomNote, magazine) {
  const noteArr = ransomNote.split('');
  const magazineArr = magazine.split('');

  for (let i = 0; i < noteArr.length; i++) {
    if (magazineArr.includes(noteArr[i])) {
      const index = magazineArr.indexOf(noteArr[i]);
      magazineArr.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
};

let ransomNote = 'aabb';
let magazine = 'aabbc';
canConstruct(ransomNote, magazine);
