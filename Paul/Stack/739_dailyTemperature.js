var temperaturesOne = [73, 74, 75, 71, 69, 72, 76, 73];
// Output: [1,1,4,2,1,1,0,0]

var temperaturesTwo = [30, 40, 50, 60];
// Output: [1,1,1,0]

var temperaturesThree = [30, 60, 90];
// Output: [1,1,0]

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperaturesA = function (temperatures) {
  let result = [];

  for (let i = 0; i < temperatures.length; ++i) {
    let isFound = false;
    let count = 0;

    // starting from one after the index i
    for (let j = i + 1; j < temperatures.length && !isFound; ++j) {
      //   console.log(`Comparing ${temperatures[i]} and ${temperatures[j]}`);
      if (temperatures[j] > temperatures[i]) {
        count++;
        isFound = true;
      } else {
        count++;
      }

      if (j === temperatures.length - 1 && !isFound) {
        count = 0;
      }

      //   console.log(`count is ${count}`);
    }

    result.push(count);
  }

  return result;
};

// console.log(dailyTemperaturesA(temperaturesOne));
// console.log(dailyTemperaturesA(temperaturesTwo));
// console.log(dailyTemperaturesA(temperaturesThree));

// leetcode solutions
var dailyTemperaturesB = function (T) {
  for (let i = 0; i < T.length; i++) {
    const temp = T[i];
    index = i + 1;
    while (T[index] <= temp) index += 1;

    if (index === T.length) T[i] = 0;
    else T[i] = index - i;
  }
  return T;
};

// using stack
var dailyTemperaturesC = function (temperatures) {
  let res = new Array(temperatures.length).fill(0);
  let stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    // while the stack size is larger than 0 AND temperature of index i is larger than stack element of stack size - 1 index
    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      let popped = stack.pop();
      // put the difference between i and popped to the popped index of res array
      res[popped] = i - popped;
    }

    stack.push(i);
    console.log(`stack: ${stack}`);
  }
  return res;
};

console.log(dailyTemperaturesC(temperaturesOne));

// using javascript methods -> not efficient!
var dailyTemperaturesD = (T) =>
  T.map((t, i) => {
    let j = T.slice(i + 1).findIndex((a) => a > t);
    return j > -1 ? j + 1 : 0;
  });
