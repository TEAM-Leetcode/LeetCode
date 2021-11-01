var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  let answer = [];

  const backTracking = (letter, index) => {
    let num = digits[index];
    let chars = map[num];

    if (index === digits.length) {
      answer.push(letter);
      return;
    }

    for (let c of chars) backTracking(letter + c, index + 1);
  };

  backTracking('', 0);
  return answer;
};

let digits = '34123';

console.log(letterCombinations(digits));
letterCombinations(digits);
