// // O(NlogN)
var findUnsortedSubarray = function (nums) {
  let sorted = [...nums].sort((a, b) => a - b);

  let start = 0;
  let end = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== nums[i]) {
      start = i;
      break;
    }
  }

  for (let j = sorted.length - 1; j >= 0; j--) {
    if (sorted[j] !== nums[j]) {
      end = j;
      break;
    }
  }

  if (!start && !end) return 0;
  return end - start + 1;
};

// O(N)
const findUnsortedSubarray = nums => {
  let min = 100000;
  let max = -100000;

  for (let i = 1; i < nums.length; i++) {
    let prev = nums[i - 1];
    let cur = nums[i];

    if (cur < prev) min = Math.min(min, cur);
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    let prev = nums[j + 1];
    let cur = nums[j];

    if (cur > prev) max = Math.max(max, cur);
  }

  if (max === 0 && min === 100000) return 0;

  let start = 0;
  let end = 0;

  for (let k = 0; k < nums.length; k++) {
    if (min < nums[k]) {
      start = k;
      break;
    }
  }

  for (let u = nums.length - 1; u >= 0; u--) {
    if (max > nums[u]) {
      end = u;
      break;
    }
  }

  if (!start && !end) return 0;

  let answer = end - start + 1;

  return answer;
};

// 꺾이는 지점 중에서 가장 작은 값을 찾고 (앞에서부터 loop을 돌 때)
// 꺾이는 지점 중에서 가장 큰 값을 찾는다(뒤에서 부터 loop을 돌 때)

// 이후 해당 꺾이는 지점을 오른쪽으로 당겨준다. (앞에서부터 loop을 돌 때)
// 이후 해당 꺾이는 지점을 왼쪽으로 당겨준다. (뒤에서부터 loop을 돌 때)

let nums = [
  -100, -99, -98, -97, -96, -95, -94, -93, -92, -91, -90, -89, -88, -87, -86,
  -85, -84, -83, -82, -81, -80, -79, -78, -77, -76, -75, -65, -53, -73, -63,
  -67, -61, -39, -58, -56, -55, -68, -66, -74, -49, -60, -51, -62, -42, -47,
  -54, -43, -71, -64, -59, -45, -69, -57, -41, -70, -44, -46, -50, -48, -72,
  -52, -40, -38, -37, -36, -35, -34, -33, -32, -31, -30, -29, -28, -27, -26,
  -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11,
  -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
  50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
  69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
  88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
];
findUnsortedSubarray(nums);
