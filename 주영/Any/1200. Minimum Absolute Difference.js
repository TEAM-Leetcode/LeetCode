/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let answer = [];
  arr.sort((a, b) => a - b);
  let min = 9999;

  for (let i = 0; i < arr.length - 1; i++) {
    min = Math.min(arr[i + 1] - arr[i], min);
  }

  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j + 1] - arr[j] === min) answer.push([arr[j], arr[j + 1]]);
  }

  return answer;
};

arr = [3, 8, -10, 23, 19, -4, -14, 27];
minimumAbsDifference(arr);
