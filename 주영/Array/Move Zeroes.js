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

// ---------------------------------------------------------------------- //
//two pointers
// 다른 사람의 풀이 1
var pos = 0;
for (var i = 0; i < nums.length; i++) {
  if (nums[i] !== 0) {
    nums[pos++] = nums[i]; // 0이 아닌 것들만 배열로 만들어준다.
  }
}
for (i = pos; i < nums.length; i++) {
  nums[i] = 0; // pos번지부터 nums[i] ~ nums[nums.length] 는 모두 0으로 바뀐다.
}

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);

// 다른 사람의 풀이 2
function moveZeroes(nums) {
  var idx = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i]; // 0이 아닌 것들을 맨 앞으로 빼준다.
      nums[i] = idx === i ? nums[i] : 0; // 0이 아닌 것들을 앞으로 뺀 자리에 0을 채워준다.
      idx++; // 그 다음엔 nums[1]번지에 오게 됨.
    }
  }
}

// P님의 풀이
var moveZeroes = function (nums) {
  if (nums.length === 1) return nums;

  var count = 0;
  for (let i = 0; i < nums.length - count; i++) {
    // nums.length - count를 해주는 이유: 반복을 nums.length만큼 돌아야 할텐데 왜? -> nums[i]가 0일 때마다 i를 이전 자리부터 시작하기 때문에 (count를 안 빼주면 길이가 계속 늘어날 것)
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      count++;
      i--; // 0이 있으면 다시 이전 자리부터 시작 -> 이해됨.
    }
  }
  return nums;
};

nums = [0, 3, 5, 2, 0];
