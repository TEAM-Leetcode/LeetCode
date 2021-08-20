/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
    const count = {};
    for (const c of tiles) {
        count[c] = (count[c] ?? 0) + 1;
    }
    return recurse(count);
};

/**
 * Recurse with object
 * @param {Object} object
 */
var recurse = function (object) {
    let sum = 0;

    for (const letter in object) {
        if (object[letter] === 0) {
            delete object[letter];
            continue;
        }

        sum++;
        object[letter]--;
        sum += recurse(object);
        object[letter] = (object[letter] ?? 0) + 1;
    }

    return sum;
};

console.log(numTilePossibilities('AAABBC'));
