// 혼자 못 풀었음.
// 다시 풀기
function subsets(nums) {
  const powerset = [];
  generatePowerset([], 0);

  function generatePowerset(path, index) {
    console.log('path: ', path);
    for (let i = index; i < nums.length; i++) {
      generatePowerset([...path, nums[i]], i + 1);
    }
  }
  return powerset;
}

let nums = [1, 2, 3];
subsets(nums);
