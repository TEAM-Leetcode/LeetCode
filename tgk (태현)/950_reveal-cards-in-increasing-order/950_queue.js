/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    deck.sort((a, b) => a - b);

    const lenOfArray = deck.length;

    let ret = new Array(lenOfArray);
    for (let i = 0; i < lenOfArray; i++) {
        ret[i] = 0;
    }

    let queue = new Array(lenOfArray);
    for (let i = 0; i < lenOfArray; i++) {
        queue[i] = i;
    }

    let deckIdx = 0;
    while (queue.length !== 0) {
        let index = queue.shift();
        ret[index] = deck[deckIdx++];
        if (queue.length === 0) {
            break;
        }
        queue.push(queue.shift());
    }

    return ret;
};
