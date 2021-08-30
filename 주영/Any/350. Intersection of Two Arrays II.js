var intersect = function (nums1, nums2) {
  let obj = {};
  let answer = [];

  nums1.forEach(num1 => {
    obj[num1] ? obj[num1]++ : (obj[num1] = 1);
  });

  nums2.forEach(num2 => {
    if (obj[num2] > 0) {
      answer.push(num2);
      obj[num2]--;
    }
  });

  return answer;
};

var intersect = (nums1, nums2) =>
  nums1.filter(item => {
    if (nums2.includes(item))
      return nums2.splice(nums2.indexOf(item), 1) || true;
  });

let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];

intersect(nums1, nums2);
