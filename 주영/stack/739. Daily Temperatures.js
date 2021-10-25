/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let len = temperatures.length;
  let answer = [];
  let stack = [];

  for (let i = 0; i < len; i++) {
    while (stack && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      answer[stack[stack.length - 1]] = i - stack.pop();
    }
    stack.push(i);
    console.log('stack: ', stack);
    console.log('answer: ', answer);
  }
};

let temperatures = [39, 20, 70, 36, 30, 60, 80, 1];
dailyTemperatures(temperatures);

// Stack을 이용한 방법의 시간 복잡도는 대부분 O(N)이다.
