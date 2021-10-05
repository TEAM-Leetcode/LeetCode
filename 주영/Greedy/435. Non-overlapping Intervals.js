/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);

  let cnt = 0;
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (end > intervals[i][0]) cnt++;
    else end = intervals[i][1];
  }
  return cnt;
};

let intervals = [
  [1, 100],
  [11, 22],
  [1, 11],
  [2, 12],
];

eraseOverlapIntervals(intervals);
