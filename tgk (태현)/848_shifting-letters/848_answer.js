/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
    const n = shifts.length;
    const shiftsIndividual = new Array(shifts.length);

    for (let i = n - 1; i >= 0; i--) {
        shiftsIndividual[i] = ((shiftsIndividual[i + 1] ?? 0) + shifts[i]) % 26;
    }

    const a = 'a'.charCodeAt();
    const z = 'z'.charCodeAt();

    const ret = [];

    for (let i = 0; i < n; i++) {
        let code = s.charCodeAt(i) + shiftsIndividual[i];
        while (code > z) {
            code -= 26;
        }
        ret.push(String.fromCharCode(code));
    }

    return ret.join('');
};
