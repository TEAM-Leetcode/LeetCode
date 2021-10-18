/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    let sCode = s.charCodeAt(start);
    let eCode = s.charCodeAt(end);

    if (!isLetter(sCode)) {
      start++;
      continue;
    }

    if (!isLetter(eCode)) {
      end--;
      continue;
    }

    if (toLowerCase(sCode) !== toLowerCase(eCode)) return false;

    start++;
    end--;
  }
  return true;
};

const isLetter = code => {
  if (
    (code >= 48 && code <= 57) || // 숫자
    (code >= 65 && code <= 90) || // 대문자
    (code >= 97 && code <= 122) // 소문자
  )
    return true;
  else return false;
};

const toLowerCase = code => {
  if (code >= 65 && code <= 90) return code + 32;
  else return code;
};

// 65 ~ 90 : A ~ Z
// 97 ~ 122: a ~ z

let s = 'A man, a plan, a canal: Panama';
isPalindrome(s);
