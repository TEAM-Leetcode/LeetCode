var generate = function (numRows) {
  let answer = [];
  let preLine = [];

  answer.push([1]);

  while (answer.length < numRows) {
    let currentLine = [];
    currentLine[0] = 1; // 처음에 push 1 해주고

    for (let i = 0; i < preLine.length; i++) {
      currentLine[i + 1] = preLine[i] + preLine[i + 1];
    }
    currentLine.push(1); // 마지막 push 1 해주기
    answer.push(currentLine);
    // console.log('answer: ', answer);
    preLine = currentLine; // 다음 행으로 넘어가기
  }
  return answer;
};

let numRows = 5;
generate(numRows);
