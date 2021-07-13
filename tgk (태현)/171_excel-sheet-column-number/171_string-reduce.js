/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    // 코드 한 줄로 문제를 풀수 있으면 좋죠 ㅎㅎ

    // 알파벳을 처음부터 끝까지 읽으면서 accumulator (acc) 를 계산해 주는 방식입니다
    // ZZ => 26 (Z) * 26 + 26 (Z) = 702
    // AYB => 1 (A) * 26 * 26 + 25 (Y) * 26 + 2 (B) = 1328
    return columnTitle
        .split('')
        .reduce((acc, char) => (acc = acc * 26 + char.charCodeAt() - 64), 0);
};
