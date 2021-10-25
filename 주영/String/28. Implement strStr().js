/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;

  for (let i = 0; i < haystack.length; i++) {
    let cur = i;
    let ptr = 0;

    while (haystack[cur] === needle[ptr] && ptr < needle.length) {
      cur++;
      ptr++;
    }

    if (ptr === needle.length) return i;
  }
  return -1;
};

let haystack = 'hello';
let needle = 'll';

strStr(haystack, needle);
