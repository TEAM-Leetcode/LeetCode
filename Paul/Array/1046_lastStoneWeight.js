// https://leetcode.com/problems/last-stone-weight/

var stones = [2, 7, 4, 1, 8, 1];
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

const lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);
    let num = stones[0] - stones[1];
    stones = stones.slice(2);
    num === 0 || stones.push(num);
  }

  return stones.length ? stones[0] : 0;
};

console.log(lastStoneWeight(stones));
