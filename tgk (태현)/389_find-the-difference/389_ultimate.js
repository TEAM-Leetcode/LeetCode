/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    // 389_string-value-compare 와 389_bit-manipulation 을 합친 더 빠른 알고리즘 입니다
    // bit을 계산하는게 숫자 계산보다 빠르기 때문입니다.
    const sVal = s
        .split('')
        .reduce((acc, char) => (acc ^= char.charCodeAt()), 0);
    const tVal = t
        .split('')
        .reduce((acc, char) => (acc ^= char.charCodeAt()), 0);

    return String.fromCharCode(tVal - sVal);
};
