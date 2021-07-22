// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
// recursive
const letterCombinations = function (digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  if (!digits.length) {
    return [];
  }

  let results = [];

  const recursive = function (digits, results, index, prefix = '') {
    if (index === digits.length) {
      results.push(prefix);

      return;
    }

    for (let letter of map[digits[index]]) {
      recursive(digits, results, index + 1, prefix + letter);
    }
  };

  recursive(digits, results, 0);

  return results;
};

// backtrack
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/discuss/1017544/JavaScript-or-WhiteBoard-or-backtracking-or-90-faster-or-30-space
function letterCombinations(digits, r = [], c = 0, cs = '') {
  const phoneMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const results = [];
  return lcRecur(phoneMap, digits, results, 0, '');
}

/**
 * @function lcRecur
 * Start by checking to see if the current recursive tree level is at the level we'd expect if we were given a new result.
 * Assuming we're not at a leaf level, then generate the next letter by concatenating onto the currentStr value.
 * We find the letter to concatenate by using the current tree level as the index selector on the given input string. Then given that single character, we
 * cross reference it with the phoneMap dictionary, and find the target values. Using the i value, we select the target letter and concatenate onto the current string.
 * We then call a recursive function.
 *
 * Once the recursive function returns (because it's reached a leaf node level), we "backtrack" by popping off the last letter we concatenated.
 * Then we iterate i, and concatenate again, and call another recursive function.
 * @param {obj} phoneMap
 * @param {string} digits
 * @param {array} results
 * @param {number} treeLevel
 * @param {string} currentStr
 * @return {array} results
 */
function lcRecur(phoneMap, digits, results, treeLevel, currentStr) {
  if (!digits.length) return [];
  if (treeLevel === digits.length) {
    results.push(currentStr);
    return;
  }
  let current = currentStr;
  const letterGrp = phoneMap[digits[treeLevel]] || '';
  for (let i = 0; i < letterGrp.length; i++) {
    current += phoneMap[digits[treeLevel]][i]; // Pluck out the target letter
    lcRecur(phoneMap, digits, results, treeLevel + 1, current);
    current = current.slice(0, current.length - 1); // Backtrack by slicing off current string value.
  }
  return results;
}
