// https://leetcode.com/problems/combination-sum/

var candidates1 = [2, 3, 6, 7],
  target1 = 7;
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

var candidates2 = [2, 3, 5],
  target2 = 8;
// Output: [[2,2,2,2],[2,3,3],[3,5]]

var candidates3 = [2],
  target3 = 1;
// Output: []

var candidates4 = [1],
  target4 = 1;
// Output: [[1]]

var candidates5 = [1],
  target5 = 2;
// Output: [[1,1]]

// youtube.com/watch?v=irFtGMLbf-s
const combinationSum = function (candidates, target) {
  let result = [];

  if (!candidates) {
    return result;
  }

  // sorting the candidates in ascending order
  candidates.sort((a, b) => a - b);

  let combination = []; // root node
  findCombination(result, combination, candidates, target, 0);

  //   console.log('final result is: ', result);
  return result;
};

const findCombination = function (result, combination, candidates, target, start) {
  // termination point
  if (target === 0) {
    // push the copied array because the combination is a reference variable that gets updated constantly
    console.log(combination);
    result.push([...combination]);
    // result.push(combination);
    // console.log('result is: ', result);
    return;
  } else if (target < 0) {
    // [2, 2, 2, 2]
    return;
  }

  console.log(combination);

  for (let i = start; i < candidates.length; ++i) {
    if (candidates[i] > target) {
      break;
    }

    combination.push(candidates[i]);
    findCombination(result, combination, candidates, target - candidates[i], i); // [2, 2, 2]
    combination.pop(); // backtracking [2, 2]
  }
};

console.log(combinationSum(candidates1, target1));
