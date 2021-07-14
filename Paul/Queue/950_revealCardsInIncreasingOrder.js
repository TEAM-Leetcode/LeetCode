// https://leetcode.com/problems/reveal-cards-in-increasing-order/solution/

/**
 * @param {number[]} deck
 * @return {number[]}
 */
const deckRevealedIncreasing = function (deck) {
  // sort the deck in descending order
  deck.sort((a, b) => b - a);

  // deck -> [17, 13, 11]
  let result = [deck[0]]; // [17]

  for (let i = 1; i < deck.length; ++i) {
    result.unshift(result.pop()); // [13, 17] -> [17, 13]
    result.unshift(deck[i]); // [11, 17, 13]
  }

  return result;
};

// leetcode solution
// if the deck is revealed in the order [0, 2, 4, ...] then we know we need to put the smallest
// card in index 0, the second smallest card in index 2, the third smallest card in index 4, etc.
const deckRevealedIncreasing = function (deck) {
  let index = [];

  for (let i = 0; i < deck.length; ++i) {
    index.push(i);
  }

  deck.sort((a, b) => a - b);
  let result = [];

  for (let num of deck) {
    result[index.shift()] = num;

    if (index.length) {
      index.push(index.shift());
    }
  }

  return result;
};
