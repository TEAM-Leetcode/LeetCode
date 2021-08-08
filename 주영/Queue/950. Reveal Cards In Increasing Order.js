var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);

  let answer = [];

  for (let i = deck.length - 1; i >= 0; i--) {
    answer.unshift(deck[i]);
    answer.unshift(answer.pop());
  }

  answer.push(answer.shift());
  return answer;
};

let deck = [17, 13, 11, 2, 3, 5, 7];
let sortedDeck = [2, 3, 5, 7, 11, 13, 17];
deckRevealedIncreasing(deck);
