// Array

const removeDuplicates = function (nums) {
    nums.reduce((acc, v, i) => {
        if (acc.includes(v)) nums[i] = "_";
        else acc.push(v);
        return acc;
    }, []);
    nums.sort();
    if (nums.indexOf("_") !== -1)
        nums.splice(nums.indexOf("_"), nums.length - 1);

    nums.sort((a, b) => a - b);

    return nums.length;
};
