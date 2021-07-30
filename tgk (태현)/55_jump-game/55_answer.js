/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const canJump = new Array(nums.length).fill(false);
    canJump[0] = true;

    for (let i = 1; i < canJump.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (canJump[j] && nums[j] >= i - j) {
                canJump[i] = true;
                break;
            }
        }
    }

    return canJump[canJump.length - 1];
};
