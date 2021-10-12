/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    const dp = new Array(s.length + 1).fill(-1);

    return numDecodingsHelper(s, dp);
};

/**
 * @param {string} s
 * @param {number[]} dp
 * @return {number}
 */
var numDecodingsHelper = function (s, dp) {
    if (s.length === 0) {
        return 1;
    }

    if (s[0] === '0') {
        return 0;
    }

    if (s.length === 1) {
        return 1;
    }

    if (dp[s.length] !== -1) {
        return dp[s.length];
    }

    const firstTwoNumber = Number(s.slice(0, 2));

    if (firstTwoNumber > 26) {
        if (dp[s.length - 1] === -1) {
            dp[s.length - 1] = numDecodingsHelper(s.slice(1), dp);
        }

        return dp[s.length - 1];
    } else {
        if (dp[s.length - 1] === -1) {
            dp[s.length - 1] = numDecodingsHelper(s.slice(1), dp);
        }

        if (dp[s.length - 2] === -1) {
            dp[s.length - 2] = numDecodingsHelper(s.slice(2), dp);
        }

        return dp[s.length - 1] + dp[s.length - 2];
    }
};
