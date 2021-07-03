// 2021.06.29
// https://leetcode.com/problems/island-perimeter/
// 파스칼의 삼각형
const generate = function (numRows) {
    let answer = [];
    for (let i = 0; i < numRows; i++) {
        if (i === 0) answer[0] = [1];
        // 첫번째 인덱스
        else if (i === 1) answer[1] = [1, 1];
        // 두번째 인덱스
        else {
            // 세번째 부터
            const prevIndex = answer[i - 1];
            answer[i] = [1]; // 해당 인덱스의 첫번째 값은 무조건 1

            // 이전 인덱스 요소들
            prevIndex.forEach((val, index) => {
                if (index < prevIndex.length - 1) {
                    answer[i].push(val + prevIndex[index + 1]);
                }
            });
            answer[i].push(1); // 해당 인덱스의 마지막 값은 무조건 1
        }
    }
    return answer;
};
console.log(generate(5));
