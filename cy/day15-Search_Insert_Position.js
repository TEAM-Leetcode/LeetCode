// 2021.07.03
// 1. https://leetcode.com/problems/search-insert-position/

const searchInsert = function (nums, target) {
    if (target === 0) return 0;

    // 대상이 없을때
    if (nums.indexOf(target) === -1) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > target) return i;
            else if (nums[nums.length - 1] < target) {
                // 마지막 인덱스만
                return nums.length;
            }
        }
    } else {
        let low = 0;
        let high = nums.length - 1;
        // 찾는 대상이 있다면
        // low가 high보다 작거나 같으면 계속해서 반복을하며 범위를 좁혀나간다
        while (low <= high) {
            let mid = Math.floor((high + low) / 2);
            if (nums[mid] === target) return mid;
            else if (nums[mid] > target) high = mid - 1;
            // target보다 작으면
            else low = mid + 1; // target보다 크면
        }
    }
};
// console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
