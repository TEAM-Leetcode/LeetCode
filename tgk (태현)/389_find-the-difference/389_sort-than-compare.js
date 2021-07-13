/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    // s와 t를 array로 바꿔 순서맞게 정리 한 뒤
    // 알파벳 하나씩 비교해서
    // 맨 처음 다른 알파벳을 리턴합니다
    s = s.split('').sort();
    t = t.split('').sort();

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) return t[i];
    }
    return t[t.length - 1];
};
