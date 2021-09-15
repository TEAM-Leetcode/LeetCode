/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {};

const cases = ['A', 'B', 'C'];
const outArr = [];

const permuteRepl = (array, n, eachElements, outArr) => {
  // 재귀 종료문
  if (array.length == n) {
    outArr.push(JSON.parse(JSON.stringify(array))); // 깊은 복사
    return;
  }
  for (let el of eachElements) {
    array.push(el);
    permuteRepl(array, n, eachElements, outArr);
    array.pop();
  }
};
permuteRepl([], cases.length, cases, outArr);
let answer = outArr.map((_) => _.join(''));
console.log('answer: ', answer);
