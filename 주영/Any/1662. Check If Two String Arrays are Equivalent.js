/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let sum1 = '';
  let sum2 = '';

  word1.map((item) => (sum1 += item));
  word2.map((item) => (sum2 += item));

  return sum1 === sum2;
};

let word1 = ['ab', 'c'];
let word2 = ['a', 'bc'];

arrayStringsAreEqual(word1, word2);
