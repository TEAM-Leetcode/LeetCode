// 해설: https://velog.io/@ken1204/78.-Subsets

var subsets = function (nums) {
  let result = [[]];

  function backtrack(first, current) {
    // we iterate over the indexes i from 'first' to the length
    //of the entire sequence 'nums'
    for (let i = first; i < nums.length; i++) {
      current.push(nums[i]);

      // use distructure operator to clone 'current' value and save to 'result'
      result.push([...current]);

      // generate all other subsets for the current subset.
      // increasing the position by one to avoid duplicates in 'result'
      backtrack(i + 1, current);

      // BACKTRACK.
      current.pop();
    }
  }

  backtrack(0, []);
  return result;
};
