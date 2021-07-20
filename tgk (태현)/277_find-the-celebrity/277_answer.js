const graph = [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 1],
];

/**
 * Definition for knows()
 *
 * @param {number} a
 * @param {number} b
 * @returns {boolean}
 */
const knows = (a, b) => {
    return graph[a][b] === 1;
};

/**
 * @param {function} knows(a, b)
 * @returns {function}
 */
var solution = function (knows) {
    /**
     * @param {number} n
     * @return {number}
     */
    return function (n) {
        let ret = -1;
        for (let i = 0; i < n; i++) {
            let count = 0;
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    if (knows(j, i)) {
                        count++;
                    } else {
                        break;
                    }
                }
            }
            if (count === n - 1) {
                ret = i;
                break;
            }
        }

        if (ret !== -1) {
            for (let i = 0; i < n; i++) {
                if (ret !== i && knows(ret, i)) {
                    return -1;
                }
            }
        }
        return ret;
    };
};

const answer = solution(knows);
console.log(answer(3));
