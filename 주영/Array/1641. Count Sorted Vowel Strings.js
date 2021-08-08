/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let temp = [];

  for (let i = 0; i < n + 1; i++) {
    let binaryNum = i.toString(2);
    let cnt = 0;
    for (let j = 0; j < binaryNum.length; j++) {
      if (binaryNum[j] === '1') cnt++;
    }
    temp.push(cnt);
  }

  console.log(temp);
};

let n = 2;
countVowelStrings(n);
