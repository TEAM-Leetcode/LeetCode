// 2021.07.02
// https://leetcode.com/problems/climbing-stairs/
const climbStairs = function (n) {
    let num = 0;
    if (n === 1) return 1;
    else num++;

    return num;
};
console.log(climbStairs(3));
