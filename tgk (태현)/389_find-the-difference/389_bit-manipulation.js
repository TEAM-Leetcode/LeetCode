/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    // bit manipulation으로 푸는 방법 입니다

    // 변수 x 에 x ^ x (x XOR x) 가 0 이라는 XOR 특성으로 풉니다.
    // s 의 모든 알파벳들과 t의 모든 알파벳을 XOR 처리 합니다.
    // 나온 값을 알파벳으로 바꿔 리턴합니다.
    let c = 0;
    for (let i = 0; i < s.length; i++) {
        c ^= s.charAt(i).charCodeAt();
        c ^= t.charAt(i).charCodeAt();
    }
    c ^= t.charAt(t.length - 1).charCodeAt();

    return String.fromCharCode(c);
};
