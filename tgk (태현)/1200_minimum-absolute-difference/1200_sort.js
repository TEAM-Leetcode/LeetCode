/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    /**
     * arr를 정렬하면 풀기 쉬워지는 문제입니다
     * arr = [1,4,6,10,12]를 예시로 들면 (이미 정렬이 되어 있습니다)
     * 1 부터 10부터 봅니다 (마지막 숫자는 보지 않습니다)
     *
     * [1,4]를 봅니다
     * 현재 제일 작은 차이를 가지고 있으니, 정답을 [[1,4]]으로 씁니다
     *
     * [4,6]을 봅니다
     * 전 차이 (3) 보다 작은 차이를 가지고 있으니, 정답을 [[4, 6]]으로 씁니다
     *
     * [6,10]을 봅니다
     * 전 차이 (2) 보다 큰 차이를 가지고 있으니, 놔둡니다
     *
     * [10,12]를 봅니다
     * 전 차이 (2) 와 같은 차이를 가지고 있으니, 있는 정답에 [10,12]을 넣습니다
     * (현 정답 [[4,6], [10,12]])
     *
     * 마지막에 정답은 [[4,6], [10,12]]입니다
     */
    arr.sort((a, b) => a - b);

    let ret = [];
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i + 1] - arr[i];

        if (diff === min) {
            ret.push([arr[i], arr[i + 1]]);
        } else if (diff < min) {
            min = diff;
            ret = [[arr[i], arr[i + 1]]];
        }
    }

    return ret;
};
