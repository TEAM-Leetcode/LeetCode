/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let result = 0;
  let sum = 0;
  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let [x, y] of boxTypes) {
    sum += x;
    result += x * y;
    if (sum > truckSize) {
      let remain = sum - truckSize;
      result -= remain * y;
      break;
    }
  }
  return result;
};

// 다른 사람의 풀이
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let ans = 0;

  for (let [x, y] of boxTypes) {
    if (!truckSize) break;
    let count = Math.min(x, truckSize);
    ans += count * y;
    truckSize -= count;
  }
  return ans;
};

let boxTypes = [
  [5, 10],
  [2, 5],
  [4, 7],
  [3, 9],
];

let truckSize = 10;

maximumUnits(boxTypes, truckSize);
