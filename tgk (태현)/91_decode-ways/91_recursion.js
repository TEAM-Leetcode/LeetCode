/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s.length === 0) {
        return 1;
    }

    if (s[0] === '0') {
        return 0;
    }

    if (s.length === 1) {
        return 1;
    }

    const firstTwoNumber = Number(s.slice(0, 2));

    if (firstTwoNumber > 26) {
        return numDecodings(s.slice(1));
    } else {
        return numDecodings(s.slice(1)) + numDecodings(s.slice(2));
    }
};

/*

f(226) = f(26) + f(6) = f(6) + f(.) + f(6) = 3
f(12) = f(2) + f(.) = 2

f(123123) = f(23123) + f(3123)
f(23123) = f(3123) + f(123)
f(3123) = f(123)     // 31은 안됩니다
f(123) = f(23) + f(3)
f(23) = f(3) + f(.)

f(23) = 2
f(123) = 3
f(3123) = 3
f(23123) = 6
f(123123) = 9
*/
