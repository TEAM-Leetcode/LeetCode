var subsets = function (nums) {
  let result = [[]];

  function backtrack(first, stack) {
    for (let i = first; i < nums.length; i++) {
      stack.push(nums[i]);
      result.push([...stack]);
      backtrack(i + 1, stack);
      stack.pop();
    }
  }

  backtrack(0, []);
  return result;
};

let nums = [1, 2, 3];
console.log(subsets(nums));
