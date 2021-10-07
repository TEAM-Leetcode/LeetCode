/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const frequencyMap = new Map();
    for (const c of s) {
        frequencyMap.set(c, (frequencyMap.get(c) ?? 0) + 1);
    }

    const frequencyBucket = new Array(s.length + 1);
    for (const key of frequencyMap.keys()) {
        const frequency = frequencyMap.get(key);

        if (frequencyBucket[frequency] === undefined) {
            frequencyBucket[frequency] = [];
        }

        frequencyBucket[frequency].push(key);
    }

    const retArray = [];

    for (let i = 0; i < s.length + 1; i++) {
        if (frequencyBucket[i] !== undefined) {
            for (const c of frequencyBucket[i]) {
                for (let j = 0; j < i; j++) {
                    retArray.push(c);
                }
            }
        }
    }

    return retArray.reverse().join('');
};

const s = 'Aabb';

console.log(frequencySort(s));
