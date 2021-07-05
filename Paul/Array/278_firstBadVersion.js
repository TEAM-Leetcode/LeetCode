// https://leetcode.com/problems/first-bad-version/

var n = 5,
  bad = 4;
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

var n = 1,
  bad = 1;
// Output: 1

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;

    while (start <= end) {
      let pivotal = (end + (end - start) / 2) | 0; // ((start + end) / 2) | 0; -> need to consider the overflow of start + end

      if (isBadVersion(pivotal)) {
        end = pivotal; // pivotal version may or may not be the first bad version
      } else {
        start = pivotal + 1;
      }
    }

    return start;
  };
};
