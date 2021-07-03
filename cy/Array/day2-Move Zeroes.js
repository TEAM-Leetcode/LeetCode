// 2021.06.19
// 1번
// https://leetcode.com/problems/move-zeroes/
const moveZeroes = function (nums) {
    nums.reduce((acc, v, i) => {
        if (v === 0) nums[i] = "_";
        else acc.push(v);
        return acc;
    }, []);
    while (nums.includes("_")) {
        nums.splice(nums.indexOf("_"), 1);
        nums.push(0);
    }
    return nums;
};

// ------------------------------------------------------------------------------

// 2번 - 문제 이해도 안되서 Discuss에 있는 답
// https://leetcode.com/problems/maximum-ascending-subarray-sum/

const maxAscendingSum = function (nums) {
    let count = 0,
        max = -1;
    for (let i = 0; i < nums.length; i++) {
        count += nums[i];
        if (nums[i] >= nums[i + 1] || !nums[i + 1]) {
            max = Math.max(count, max);
            count = 0;
        }
    }
    return max;
};
