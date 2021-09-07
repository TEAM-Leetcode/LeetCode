/**
 * @param {number[]} arr
 * @return {boolean}
 */
// var checkIfExist = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.includes(arr[i] / 2) && arr.indexOf(arr[i] / 2) !== i) return true;
//   }
//   return false;
// };

var checkIfExist = function (arr) {
  let set = new Set();
  for (const item of arr) {
    if (set.has(item * 2) || set.has(item / 2)) return true;
    set.add(item);
  }

  return false;
};

let arr = [10, 2, 5, 3];
checkIfExist(arr);
