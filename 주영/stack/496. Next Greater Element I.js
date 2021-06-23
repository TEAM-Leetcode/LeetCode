var nextGreaterElement = function (nums1, nums2) {
  let answer = [];

  for (let i = 0; i < nums1.length; i++) {
    let sameNumber = nums2.indexOf(nums1[i]);
    console.log('sameNumber: ', sameNumber);
    for (let j = sameNumber; j < nums2.length; j++) {
      if (nums1[i] < nums2[j]) {
        answer.push(nums2[j]);
        console.log('num2[j]: ', nums2[j]);
        break;
      } else if (j === nums2.length - 1) {
        answer.push(-1);
      }
    }
  }
  return answer;
};

// stack and map
var nextGreaterElement = function (nums1, nums2) {
  const map = {};
  const stack = [];

  nums2.forEach((n) => {
    // greater number가 있을 경우
    while (stack.length > 0 && stack[stack.length - 1] < n) {
      map[stack.pop()] = n; // key = stack.pop(), value = n값으로 저장
    }
    stack.push(n); // 반복문 돌 때마다 stack에 push해준다.
  });
  return nums1.map((n) => map[n] || -1);
};

let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];
nextGreaterElement(nums1, nums2);
