// first solution
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);

  let arr = [];
  let endNum = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    endNum = nums.pop();
    sum = nums[i] + endNum;
    arr.push(sum);
  }
  arr.sort((a, b) => b - a);
  return arr[0];
};

// Solution 2
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);

  let sum = 0;
  let ans = 0;

  len = nums.length / 2;

  for (let i = 0; i < len; i++) {
    sum = nums[i] + nums[len * 2 - 1 - i];
    ans = Math.max(ans, sum);
  }
  return ans;
};

// Solution 3
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let newarr = [];
  let j = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i] + nums[j];
    newarr.push(temp);
    j--;
  }
  return Math.max(...newarr);
};

// Solution 4
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  var i = 0;
  var j = nums.length - 1;
  var maxx = -(10 ** 9);
  while (i < j) {
    if (nums[i] + nums[j] > maxx) {
      maxx = nums[i] + nums[j];
    }
    i++;
    j--;
  }
  return maxx;
};

let nums = [3, 5, 4, 2, 4, 6];

minPairSum(nums);
