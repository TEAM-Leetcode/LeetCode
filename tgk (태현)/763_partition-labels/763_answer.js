/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    const letterFrequency = {};

    for (const letter of s) {
        letterFrequency[letter] = (letterFrequency[letter] ?? 0) + 1;
    }

    let partitionedLetterFrequency = {};
    const ret = [];
    let equallyPartitioned;
    for (const letterOfS of s) {
        partitionedLetterFrequency[letterOfS] =
            (partitionedLetterFrequency[letterOfS] ?? 0) + 1;

        equallyPartitioned = true;
        for (const letter of Object.keys(partitionedLetterFrequency)) {
            if (
                partitionedLetterFrequency[letter] !== letterFrequency[letter]
            ) {
                equallyPartitioned = false;
                break;
            }
        }

        if (equallyPartitioned) {
            ret.push(
                Object.values(partitionedLetterFrequency).reduce(
                    (acc, cur) => acc + cur,
                    0
                )
            );
            partitionedLetterFrequency = {};
        }
    }

    console.log(ret);
    return ret;
};

let s = 'ababcbacadefegdehijhklij';

partitionLabels(s);

s = 'eccbbbbdec';

partitionLabels(s);
