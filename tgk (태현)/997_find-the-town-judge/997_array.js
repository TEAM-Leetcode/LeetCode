/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    // 모든 사람들이 들어가 있는 리스트 하나 만들고 모든 값을 0으로 초기화 합니다
    let arrayOfPeople = new Array(n);
    for (let i = 0; i < n; i++) {
        arrayOfPeople[i] = 0;
    }

    // 신뢰도에 있는 모든 신뢰를 봅니다
    // 만약 사람 a가 사람 b를 신뢰하면, a를 판사 후보에서 제외합니다 (arrayOfPeople[a] 를 -1로 만듭니다)
    // 사람 b가 판사 후보에 남아있는 상태면, b의 카운터를 올립니다. b를 신뢰하는 사람들 숫자를 기록하는 겁니다
    for (const t of trust) {
        arrayOfPeople[t[0] - 1] = -1;

        if (arrayOfPeople[t[1] - 1] !== -1) {
            arrayOfPeople[t[1] - 1]++;
        }
    }

    // 리스트를 흝어본 후 n - 1 사람 들 한테 신뢰 받고 있는 사람이 있는지 확인합니다
    // 그 사람이 마을 판사 입니다
    for (let i = 0; i < n; i++) {
        if (arrayOfPeople[i] === n - 1) {
            return i + 1;
        }
    }
    // 없으면 없다고 리턴합니다
    return -1;
};
