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
