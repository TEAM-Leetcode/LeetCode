/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (s, cost) {
  let prev = 0;
  let answer = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[prev] === s[i]) {
      if (cost[prev] <= cost[i]) {
        answer += cost[prev];
        prev = i;
      } else {
        answer += cost[i];
      }
    } else {
      prev = i;
    }
  }
  return answer;
};

let s = 'aaabbb';
let cost = [2, 1, 3, 4, 1, 2];
// expected answer: 6
minCost(s, cost);
