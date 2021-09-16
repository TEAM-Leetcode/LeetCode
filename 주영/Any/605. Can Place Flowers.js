/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  flowerbed = [0, ...flowerbed, 0];

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0 &&
      flowerbed[i - 1] === 0
    ) {
      n--;
      i++;
    }

    if (!n) break;
  }
  console.log('n: ', n);

  return n === 0;
};

let flowerbed = [0, 0, 1, 0, 1];

let n = 1;

canPlaceFlowers(flowerbed, n);
