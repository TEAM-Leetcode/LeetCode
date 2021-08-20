var minOperations = function (boxes) {
  let answer = [];
  for (let i = 0; i < boxes.length; i++) {
    let sum = 0;
    for (let j = 0; j < boxes.length; j++) {
      if (boxes[j] === '1') {
        sum += Math.abs(i - j);
      }
    }
    answer.push(sum);
  }
  return answer;
};

var minOperations = function (boxes) {
  const len = boxes.length;
  const leftToRightDp = new Array(len);
  const rightToLeftDp = new Array(len);

  (leftToRightDp[0] = 0), (rightToLeftDp[len - 1] = 0);

  let oneCount = boxes[0] === '1' ? 1 : 0;

  for (let i = 1; i < len; i++) {
    leftToRightDp[i] = leftToRightDp[i - 1] + oneCount;

    if (boxes[i] === '1') {
      oneCount++;
    }
  }

  oneCount = boxes[len - 1] === '1' ? 1 : 0;

  for (let i = len - 2; i >= 0; i--) {
    rightToLeftDp[i] = rightToLeftDp[i + 1] + oneCount;

    if (boxes[i] === '1') {
      oneCount++;
    }
  }

  const ret = [];

  for (let i = 0; i < len; i++) {
    ret.push(leftToRightDp[i] + rightToLeftDp[i]);
  }

  return ret;
};

console.log(minOperations('001011'));
