/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // leetcode에 있는 풀이입니다
    let l = 0,
        r = nums.length - 1,
        curr = 0;

    while (curr <= r) {
        if (nums[curr] === 0) {
            [nums[curr], nums[l]] = [nums[l], nums[curr]];
            curr++;
            l++;
        } else if (nums[curr] === 2) {
            [nums[curr], nums[r]] = [nums[r], nums[curr]];
            r--;
        } else if (nums[curr] === 1) {
            curr++;
        }
    }
};
