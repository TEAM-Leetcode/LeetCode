var moveZeroes = function (nums) {
  // 예외처리
  if (nums.length === 1) return nums;

  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};
// 시간 복잡도 줄이는 다른 방법 생각해보기

var moveZeroes = function (nums) {
  // 예외처리
  if (nums.length === 1) return nums;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

// ---------------------------------------------------------------------- //
//two pointers
// 다른 사람의 풀이 1
var pos = 0;
for (var i = 0; i < nums.length; i++) {
  if (nums[i] !== 0) {
    nums[pos++] = nums[i];
  }
}
for (i = pos; i < nums.length; i++) {
  nums[i] = 0;
}

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);

// 다른 사람의 풀이 2
function moveZeroes(nums) {
  var idx = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      nums[i] = idx === i ? nums[i] : 0;
      idx++;
    }
  }
}
