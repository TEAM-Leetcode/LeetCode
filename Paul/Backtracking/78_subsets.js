var nums1 = [1, 2, 3];
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

var nums2 = [0];
// Output: [[],[0]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  let result = [];

  const backtrack = function (inputArray, tempArray, result, index) {
    result.push([...tempArray]);

    for (let i = index; i < inputArray.length; ++i) {
      tempArray.push(inputArray[i]);
      backtrack(inputArray, tempArray, result, ++index);
      console.log('before: ', tempArray);
      tempArray.pop();
      console.log('after: ', tempArray);
    }
  };

  backtrack(nums, [], result, 0);
  return result;
};

console.log(subsets(nums1));

// Leetcode solution #1 - iterative
var subsetsB = function (nums) {
  let res = [[]],
    appendarr = [];

  for (let num of nums) {
    appendarr = [];
    for (let entry of res) {
      appendarr.push([...entry, num]);
    }

    res.push(...appendarr);
  }

  return res;
};
