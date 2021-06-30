var n1 = 3;
// Output: ["((()))","(()())","(())()","()(())","()()()"]

var n2 = 1;
// Output: ["()"]

/**
 * @param {number} n
 * @return {string[]}
 */

// backtracking
const generateParenthesisA = function (n) {
  let result = [];

  backtrack(result, '', 0, 0, n);

  return result;
};

const backtrack = function (acc, cur, open, close, max) {
  console.log(cur);
  if (cur.length === max * 2) {
    acc.push(cur);
    return;
  }

  if (open < max) {
    backtrack(acc, cur + '(', open + 1, close, max);
  }
  if (open > close) {
    backtrack(acc, cur + ')', open, close + 1, max);
  }
};

console.log(generateParenthesisA(3));

// leetcode solution
function generateParenthesisB(n) {
  const res = [];

  function go(l, r, s) {
    // l: left remaining, r: right remaining
    if (l > r) return; // The number of '(' should be always >= ')'

    if (l === 0 && r === 0) {
      res.push(s);
      return;
    }

    if (l > 0) go(l - 1, r, s + '(');
    if (r > 0) go(l, r - 1, s + ')');
  }

  go(n, n, '');
  return res;
}
