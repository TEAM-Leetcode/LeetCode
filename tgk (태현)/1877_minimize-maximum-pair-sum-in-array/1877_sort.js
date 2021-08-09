/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    //어레이를 정렬하면 편한 문제입니다
    nums.sort((a, b) => a - b);

    let left = 0,
        right = nums.length - 1,
        max = 0;

    while (left < right) {
        max = Math.max(max, nums[left++] + nums[right--]);
    }
    return max;
};
