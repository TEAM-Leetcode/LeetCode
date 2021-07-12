/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    // 2D 어레이를 하나 만듭니다 (이름은 dp)
    // 어레이를 -1로 가득 채웁니다.
    let dp = [];
    for (let i = 0; i <= candidates.length; i++) {
        let array = [];
        for (let j = 0; j <= target; j++) {
            array.push(-1);
        }
        dp.push(array);
    }

    // helper function을 돌려 나온 값을 다시 되돌립니다.
    return helper(candidates, target, dp);
};

// helper은 dp어레이를 써서 문제를 풉니다.
var helper = function (candidates, target, dp) {
    // base 케이스 들입니다. 별난게도 타겟 값이 0이면 [[]] 라는 어레이를 리턴해야 합니다.
    if (target === 0) {
        dp[candidates.length][target] = [[]];
        return [[]];
    }
    if (candidates.length === 0 && target > 0) {
        dp[0][target] = [];
        return [];
    }
    if (target < 0) {
        return [];
    }

    // 마지막 후보를 가져 옵니다
    let lastElement = candidates[candidates.length - 1];

    // 39_recursive-backtracking 풀이를 보면 괭장히 익숙한 코드 입니다.
    // 다른 점 하나는 dp에서 먼저 값이 있는지 확인합니다.
    // 없으면 풀고, 있으면 그 값을 그냥 가져 옵니다. 그냥 가져 올 수 있으면 정말 편하죠 ㅎㅎ
    // 조심 해야 할 점은 target - lastElement가 음수가 되는 케이스 입니다. 어레이 index는 음수를 받을 수 없기 때문에
    // 그 케이스는 걸러야 합니다 (안 그럼 에러 떠요 ㅎㅎ)
    let p = [];
    if (target - lastElement >= 0) {
        if (dp[candidates.length][target - lastElement] === -1) {
            dp[candidates.length][target - lastElement] = helper(
                candidates,
                target - lastElement,
                dp
            );
        }
        p = dp[candidates.length][target - lastElement].map((combination) => [
            ...combination,
            lastElement,
        ]);
    }

    // 여기도 위 코드랑 비슷합니다. 39_recursive-backtracking 풀이를 참고 하시면 되겠습니다.
    let q = [];
    if (dp[candidates.length - 1][target] === -1) {
        dp[candidates.length - 1][target] = helper(
            candidates.slice(0, -1),
            target,
            dp
        );
    }
    q = dp[candidates.length - 1][target];

    // p 랑 q 를 합치고 그 합친 2D어레이를 되돌리면 끝입니다.
    dp[candidates.length][target] = p.concat(q);
    return dp[candidates.length][target];
};

/**
 * 후기:
 * 시간 줄일려고 dp를 썼는데... 그렇게 많이 줄진 않더군요.
 * 이 방법 그렇게 추천 하진 않습니다 ㅎㅎ
 */
