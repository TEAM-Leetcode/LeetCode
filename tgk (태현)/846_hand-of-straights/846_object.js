/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    const n = hand.length;
    if (n % groupSize !== 0) {
        return false;
    }

    const map = {};
    for (const card of hand) {
        map[card] = (map[card] ?? 0) + 1;
    }

    const keys = Object.keys(map).sort((a, b) => a - b);
    while (keys.length !== 0) {
        const start = Number(keys.shift());
        const num = map[start];
        if (num > 0) {
            for (let i = 1; i < groupSize; i++) {
                if (!(start + i in map) || map[start + i] < num) {
                    return false;
                } else {
                    map[start + i] -= num;
                }
            }
        }
    }

    return true;
};
