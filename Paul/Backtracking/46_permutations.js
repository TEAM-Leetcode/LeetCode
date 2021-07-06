// https://leetcode.com/problems/permutations/

var nums1 = [1, 2, 3];
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

var nums2 = [0, 1];
// Output: [[0,1],[1,0]]

var nums3 = [1];
// Output: [[1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteA = function (nums) {
  if (nums.length === 0) {
    return [[]];
  }

  const firstNum = nums[0];
  const rest = nums.slice(1);

  const temp = permuteA(rest);
  const permutations = [];

  temp.forEach((perm) => {
    for (let i = 0; i <= perm.length; ++i) {
      const temp = [...perm.slice(0, i), firstNum, ...perm.slice(i)];
      permutations.push(temp);
    }
  });

  return permutations;
};

// console.log(permuteA(nums1));

// backtrack
const permuteB = function (nums) {
  let result = [];

  const backtrack = function (nums, result, idx) {
    if (idx === nums.length) {
      result.push(Array.from(nums));
    }

    for (let i = idx; i < nums.length; ++i) {
      [nums[i], nums[idx]] = [nums[idx], nums[i]];
      backtrack(nums, result, idx + 1);
      [nums[i], nums[idx]] = [nums[idx], nums[i]];
    }
  };

  // dp
  var permuteC = function (nums, n = 0) {
    if (n >= nums.length) return [[]];
    const res = [];
    const prevs = permuteC(nums, n + 1); // permutations of elements after n
    for (let prev of prevs) {
      for (let i = 0; i <= prev.length; i++) {
        let p = prev.slice(0);
        p.splice(i, 0, nums[n]); // successively insert element n
        res.push(p);
      }
    }
    return res;
  };

  backtrack(nums, result, 0);

  return result;
};

console.log(permuteB(nums1));
