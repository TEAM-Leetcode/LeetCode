/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    /**
     * 제일 (가로로) 넓은 "수조"를 시작해서 좁지만 부피가 더 큰 수조를 찾아내는 방법입니다
     *
     * 맨 처음 제일 가장자리에 있는 변을 사용해서 가장 넓은 수조를 만듭니다.
     * 포인터도 제일 왼쪽에 있는 변과 제일 오른쪽에 있는 변을 가리킵니다.
     *
     * 왼쪽 변과 오른쪽 변을 비교합니다. 작은 변을 가리키는 포인터를 중심으로 전 변보다 더 긴 변으로 옮깁니다
     * (현 부피보다 크게 만들려면 큰 변을 움직이는게 맞을까요, 작은 변을 움직이는게 맞을까요? 큰 변을 더 크게 만들어도 수조 부피가 커질까요?)
     * 새 변들로 부피를 한번 더 계산합니다. 새 부피가 더 큰 경우 새 부피를 저장합니다
     *
     * 왼쪽 변이 오른쪽 변을 가리킬 때 저장된 부피를 리턴합니다
     */
    let left = 0,
        right = height.length - 1;

    let maxArea = 0;

    while (left < right) {
        const min = Math.min(height[left], height[right]);

        maxArea = Math.max(maxArea, min * (right - left));

        while (left < right && height[left] <= min) {
            left++;
        }

        while (left < right && height[right] <= min) {
            right--;
        }
    }

    return maxArea;
};

console.log(maxArea([1, 2, 1]));
