/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */

function shiftingLetters(S, shifts) {
  for (let i = shifts.length - 2; i > -1; --i) shifts[i] += shifts[i + 1];

  for (let i = 0; i < shifts.length; ++i)
    shifts[i] = String.fromCharCode(
      ((S[i].charCodeAt() + shifts[i] - 97) % 26) + 97,
    );

  return shifts.join('');
}
