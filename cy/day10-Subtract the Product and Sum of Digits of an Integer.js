// 2021.06.28
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

const subtractProductAndSum = function (n) {
    let digits = 1;
    let sum = 0;
    String(n)
        .split("")
        .forEach((val) => {
            digits *= Number(val);
            sum += Number(val);
        });
    return digits - sum;
};
