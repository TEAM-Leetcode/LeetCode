var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  // 처음에는 for문으로 했는데, time limit 이 나와서, 이진탐색으로 시도.
  // 이진탐색으로 해결
  return function(n) {
      let low = 0;
      let high = n;
      let mid;

      while (low <= high) {
          mid = parseInt((low + high) / 2);
          if (isBadVersion(mid) === true && isBadVersion(mid - 1) === false)
              break;
          if (isBadVersion(mid) === true)
              high = mid - 1;
          else
              low = mid + 1;
      }
      return mid;
  };
};