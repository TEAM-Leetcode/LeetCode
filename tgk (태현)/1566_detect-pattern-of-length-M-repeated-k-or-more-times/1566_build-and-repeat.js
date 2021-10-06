/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
    for (let i = 0; i <= arr.length - k * m + 1; i++) {
        // create word, a and b
        const word = arr.slice(i, i + m);
        const a = [];
        for (let j = 0; j < k; j++) {
            a.push(...word);
        }
        const b = arr.slice(i, i + k * m);

        // compare a and b
        let flag = true;
        for (let j = 0; j < k * m; j++) {
            if (a[j] !== b[j]) {
                flag = false;
                break;
            }
        }

        if (flag) {
            return true;
        }
    }

    return false;
};

const arr = [1, 2, 4, 4, 4, 4],
    m = 1,
    k = 3;

console.log(containsPattern(arr, m, k));
