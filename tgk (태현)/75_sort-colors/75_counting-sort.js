/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // 숫자 0, 1, 2가 nums에 몇 개 있는지 세어 보고
    // 그에 맟게 nums를 고치는 방식 입니다

    // colors라는 어레이를 만듭니다
    // 이 어레이에 0, 1, 2가 몇 개 있는지 저장 할 것입니다
    let colors = [0, 0, 0];

    // nums에 있는 모든 숫자를 봅니다
    // 숫자가 0이면 colors[0]에 1더하고, 숫자가 1이면 colors[1]에 1 더하고,
    // 숫자가 2이면 colors[2]에 더합니다
    for (const num of nums) {
        colors[num]++;
    }

    // 이제 nums를 고칠 것입니다
    // colors[0]부터 봅니다. colors[0]이 0이 될 데까지 nums에 넣습니다.
    // colors[1]과 colors[2]도 똑같이 합니다.
    // 그러면 nums엔 0, 1, 2 순서로 숫자가 나열 되어 있을 것입니다
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (colors[j] > 0) {
                colors[j]--;
                nums[i] = j;
                break;
            }
        }
    }
};
