/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const set = new Set();
    const ret = new Array(2);

    for (const num of nums) {
        if (set.has(num)) {
            ret[0] = num;
        } else {
            set.add(num);
        }
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            ret[1] = i;
            break;
        }
    }

    return ret;
};

console.log(findErrorNums([3, 2, 2, 4]));
