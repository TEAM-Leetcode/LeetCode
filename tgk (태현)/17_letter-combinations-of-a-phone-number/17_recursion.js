const NUM_TO_LETTER = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    if (digits.length === 1) return NUM_TO_LETTER[digits];

    const prev = letterCombinations(digits.slice(0, -1));
    const digit = digits.slice(-1);
    let ret = [];
    for (const prevStr of prev) {
        for (const letter of NUM_TO_LETTER[digit]) {
            ret.push(prevStr + letter);
        }
    }

    return ret;
};

console.log(letterCombinations('23'));
