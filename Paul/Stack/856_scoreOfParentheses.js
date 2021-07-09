// https://leetcode.com/problems/score-of-parentheses

/**
 * @param {string} s
 * @return {number}
 */

// divide and conquer
const scoreOfParentheses = function (str) {
  return recursive(str, 0, str.length);
};

const recursive = function (s, i, j) {
  //Score of balanced string s[i:j]
  let ans = 0,
    bal = 0;

  // Split string into primitives
  for (let k = i; k < j; ++k) {
    bal += s.charAt(k) == '(' ? 1 : -1;
    if (bal == 0) {
      if (k - i == 1) ans++;
      else ans += 2 * recursive(s, i + 1, k);
      i = k + 1;
    }
  }

  return ans;
};

// https://leetcode.com/problems/score-of-parentheses/discuss/1080625/JS-Python-Java-C%2B%2B-or-Easy-O(1)-Space-Solution-w-Explanation

const scoreOfParentheses = function (str) {
  let len = str.length,
    pwr = 0,
    ans = 0;
  for (let i = 1; i < len; i++)
    if (str.charAt(i) === '(') pwr++;
    else if (str.charAt(i - 1) === '(') ans += 1 << pwr--;
    else pwr--;
  return ans;
};

// stack
const scoreOfParentheses = function (str) {
  let stack = [];
  stack.push(0); // beginning score

  for (let s of str) {
    if (s === '(') {
      stack.push(0);
    } else {
      let v = stack.pop();
      let w = stack.pop();
      stack.push(w + Math.max(2 * v, 1));
    }
  }

  return stack.pop();
};
