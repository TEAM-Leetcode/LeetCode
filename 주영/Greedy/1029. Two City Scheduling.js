/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  costs.sort((a, b) => {
    let diffA = a[0] - a[1];
    let diffB = b[0] - b[1];
    return diffB - diffA;
  });

  let sum = 0;
  let i = 0;

  let len = costs.length;

  for (const [x, y] of costs) {
    if (i < len / 2) sum += y;
    if (i >= len / 2) sum += x;
    i++;
  }

  return sum;
};

// 다른 사람의 풀이
var twoCitySchedCost = function (costs) {
  costs = costs.sort((a, b) => b[0] - b[1] - (a[0] - a[1]));
  var minCost = 0,
    i;
  for (i = 0; i < costs.length / 2; i++) {
    minCost += costs[i][1];
  }
  for (i = costs.length / 2; i < costs.length; i++) {
    minCost += costs[i][0];
  }
  return minCost;
};

let costs = [
  [400, 50],
  [30, 20],
  [10, 20],
  [30, 200],
];

// 도시 간 가격차가 중요한거다.
// 도시 간 가격차를 구하고, 그걸 정렬해보자.

// Output: 110

twoCitySchedCost(costs);
