/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let obj = { b: 0, a: 0, l: 0, o: 0, n: 0 };

  for (let item of text) {
    if (obj[item] !== undefined) obj[item]++;
  }

  obj['l'] = Math.floor(obj['l'] / 2);
  obj['o'] = Math.floor(obj['o'] / 2);

  let values = Object.values(obj);

  return Math.min(...values);
};

let text = 'balon';
maxNumberOfBalloons(text);
