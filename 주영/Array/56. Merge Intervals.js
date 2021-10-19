/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let arr = [];
  let prev = intervals[0];
  arr[0] = prev;

  for (let i = 0; i < intervals.length; i++) {
    let cur = intervals[i];

    if (cur[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], cur[1]);
    } else {
      arr.push(cur);
      prev = cur;
    }
  }
  //console.log('arr: ', arr);
  return arr;
};

let intervals = [
  [2, 6],
  [1, 5],
  [9, 18],
  [19, 25],
];

merge(intervals);
