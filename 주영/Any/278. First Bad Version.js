// Binary Search
var solution = function (isBadVersion) {
  return function (n) {
    let low = 1;
    let high = n;

    while (low <= high) {
      let mid = Math.floor((high + low) / 2);
      if (isBadVersion(mid)) high = mid - 1;
      else low = mid + 1;
    }
    return low;
  };
};
