// 2021.06.23
// https://leetcode.com/problems/next-greater-element-i/

const nextGreaterElement = function (nums1, nums2) {
    let answer = [];
    nums1.forEach((val) => {
        const sameNum = nums2.indexOf(val); // nums2배열에서 nums1요소의 값의 index를 구함
        for (let i = sameNum + 1; i <= nums2.length; i++) {
            // 해당값의 index 다음숫자부터 for문 돌림
            if (val < nums2[i]) {
                // 현재 num1의 val값과 동일한 num2의 값에서 다음 요소들중 큰 숫자가 있으면
                answer.push(nums2[i]); // answer에 값 넣어줌
                break; // 찾은 첫번째 값만 넣기 위해 break
            } else if (i === nums2.length) answer.push(-1); // num2의 자리가 마지막일때 -1
        }
    });
    return answer;
};

const nextGreaterElement2 = function (nums1, nums2) {
    const map = new Map();
    const stack = [];
    nums2.forEach((num) => {
        while (stack.length && stack[stack.length - 1] < num) {
            map.set(stack.pop(), num);
        }
        stack.push(num);
    });
    return nums1.map((num) => (map.has(num) ? map.get(num) : -1));
};
