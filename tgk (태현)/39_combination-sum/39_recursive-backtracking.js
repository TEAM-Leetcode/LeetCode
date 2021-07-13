/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    // 위에서 내려오는 recursive backtracking을 이용해서 문제를 풉니다
    // 겹치는 케이스가 많기 때문에 dp를 사용하면 더 빨라집니다

    // target이 0이면 길이가 0인 array 가 들어간 array를 리턴합니다
    if (target === 0) {
        return [[]];
    }
    // target이 0보다 작거나 candidates가 빈 경우 빈 array를 리턴합니다
    if (target < 0 || candidates.length === 0) {
        return [];
    }

    // 맨 마지막 element를 봅니다
    let lastElement = candidates[candidates.length - 1];

    // 첫 케이스: 마지막 숫자가 한번이라도 들어간 케이스. 받은 값에 마지막 숫자를 하나씩 붙여야 합니다
    let p = combinationSum(candidates, target - lastElement).map(
        (combination) => [...combination, lastElement]
    );

    // 두번째 케이스: 마지막 숫자가 없는 케이스.
    let q = combinationSum(candidates.slice(0, -1), target);

    // 두 케이스를 붙입니다
    return p.concat(q);
};
