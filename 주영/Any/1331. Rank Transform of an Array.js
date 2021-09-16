var arrayRankTransform = function (arr) {
  let obj = {};
  let sorted = [...arr].sort((a, b) => a - b);
  let answer = [];

  let num = 0;

  for (let item of sorted) {
    if (!obj[item]) {
      obj[item] = num + 1;
      num++;
    }
  }

  for (let item of arr) {
    answer.push(obj[item]);
  }

  return answer;
};

let arr = [37, 12, 28, 9, 100, 56, 80, 5, 12];
arrayRankTransform(arr);
