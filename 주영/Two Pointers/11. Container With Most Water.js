/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    // 수조 면적이 가장 작은 변에 의해 제한된다.
    let curHeight = Math.min(height[left], height[right]); // 세로
    let curWidth = right - left; // 가로
    maxArea = Math.max(maxArea, curHeight * curWidth); // 넓이

    height[left] < height[right] ? left++ : right--;
  }

  return maxArea;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
maxArea(height);
