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

    digits = digits.split('');
    let digit = digits.shift();
    let ret = Array.from(NUM_TO_LETTER[digit]);
    // let ret = NUM_TO_LETTER[digit];

    while (digits.length > 0) {
        digit = digits.shift();
        const len = ret.length;

        for (let i = 0; i < len; i++) {
            const letters = ret.shift();

            for (const letter of NUM_TO_LETTER[digit]) {
                ret.push(letters + letter);
            }
        }
    }

    return ret;
};
