'use strict';

function moveZeroes(nums) {
    // index를 for문 밖으로 빼야 splice, push로 인해 변하는 array에 index가 영향을 받지 않는다
    let index = 0;

    for (let num of nums) {
    if (nums[index] === 0) {
        nums.splice(index, 1);
        nums.push(0);
    } else {
        index++;
    }
}
  return nums;
}