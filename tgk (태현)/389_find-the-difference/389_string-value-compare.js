/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    // s와 t를 숫자로 바꿔 그 둘 차이를 구하여 그 차이를 다시 알파벳으로 변환해 풀 수 있습니다.

    // s와 t를 숫자로 바꾸는 알고리즘은 다음과 같습니다:
    // s (아니면 t) 에 모든 알파벳을 그에 맞는 ASCII값을 구합니다 (a -> 97, ... z -> 122)
    // 그 ASCII 값들을 전부 더합니다.

    // abc -> 97 + 98 + 99 = 294
    // abcd => 97 + 98 + 99 + 100 = 394
    // abcd - abc => 394 - 294 = 100 => d

    // s를 숫자로 바꿉니다
    const sVal = s
        .split('')
        .reduce((acc, char) => (acc += char.charCodeAt()), 0);
    // t를 숫자로 바꿉니다
    const tVal = t
        .split('')
        .reduce((acc, char) => (acc += char.charCodeAt()), 0);

    // 두 숫자 차이에 맞는 ASCII 알파벳을 리턴합니다
    return String.fromCharCode(tVal - sVal);
};
