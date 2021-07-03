// Solution 1
let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
dailyTemperatures(temperatures);

var dailyTemperatures = function (temperatures) {
  let stack = [];
  let answer = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (temperatures[stack[stack.length - 1]] < temperatures[i]) {
      let top = stack.pop(); // ->stack의 length가 --가 된다.
      answer[top] = i - top;
      // console.log('answer: ', answer);
    }
    stack.push(i);
    console.log('stack: ', stack);
  }
  return answer;
};

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
dailyTemperatures(temperatures);

// Solution 2
var dailyTemperatures = function (T) {
  const result = Array(T.length).fill(0);
  const stack = [];

  for (let i = 0; i < T.length; i++) {
    let top = stack[stack.length - 1];

    while (stack.length && T[top] < T[i]) {
      const idx = stack.pop();
      result[idx] = i - idx;
      top = stack[stack.length - 1];
    }
    stack.push(i);
  }
  return result;
};
