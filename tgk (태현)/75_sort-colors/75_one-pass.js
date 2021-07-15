/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // one-pass 알고리즘 입니다
    // 양 옆에 포인터를 두고 두 포인터가 1, 0 이 되면
    // 값을 서로 바꾸는 식을 계속 반복하는 코드입니다
    // 2가 나오면 nums에서 빼버리고 마지막에 집어 넣습니다

    let l = 0,
        r = nums.length - 1,
        twoCounts = 0;

    // l 이 r보다 커질 때 까지 아래를 계속 반복합니다
    while (l <= r) {
        // nums[l]이 1이 될 때까지 l을 증가합니다
        // 만약에 l이 r보다 커지면 멈춥니다
        // 2가 나오면 2를 빼고 뒤에 넣습니다
        while (nums[l] !== 1 && l <= r) {
            if (nums[l] === 2) {
                nums.push(nums.splice(l, 1));
                r--;
                twoCounts++;
            } else {
                l++;
            }
        }

        // nums[r]이 0이 될 때까지 r을 증가합니다
        // 만약에 l이 r보다 커지면 멈춥니다
        // 2가 나오면 2를 빼고 뒤에 넣습니다
        while (nums[r] !== 0 && l <= r) {
            if (nums[r] === 2) {
                nums.push(nums.splice(r--, 1));
                twoCounts++;
            } else {
                r--;
            }
        }

        // l은 r과 같거나 더 클 시 룹을 멈춥니다
        // 그렇지 않으면 nums[l]은 1에 서있고 nums[r]은 0에 서있어
        // 둘 값을 서로 바꿉니다.
        if (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }
};

// 후기: splice와 push를 사용하니
// 진정한 in-place sorting은 아니라고 볼 수 있겠네요
// ㅠㅠ
