// https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// one hash maps
// time: O(m) / space: O(k) / O(1) -> k is never more than 26
const canConstruct = function (ransomNote, magazine) {
  let magazineMap = new Map();

  for (let letter of magazine) {
    if (!magazineMap.get(letter)) {
      magazineMap.set(letter, 0);
    }

    magazineMap.set(letter, magazineMap.get(letter) + 1);
  }

  for (let letter of ransomNote) {
    if (magazineMap.get(letter) > 0) {
      magazineMap.set(letter, magazineMap.get(letter) - 1);
    } else {
      return false;
    }
  }

  return true;
};

// time: O(m * n) / space: O(m)
const canConstruct = function (ransomNote, magazine) {
  for (let letter of ransomNote) {
    let idx = magazine.indexOf(letter);

    if (idx === -1) {
      return false;
    } else {
      magazine = magazine.substring(0, idx) + magazine.substring(idx + 1);
    }
  }

  return true;
};

// two hash maps
// time: O(m) / space: O(k) / O(1) -> k is never more than 26
const canConstruct = function (ransomNote, magazine) {
  const makeCountsMap = function (str) {
    let counts = new Map();

    for (let letter of str) {
      if (!counts.get(letter)) {
        counts.set(letter, 0);
      }

      counts.set(letter, counts.get(letter) + 1);
    }

    return counts;
  };

  if (ransomNote.length > magazine.length) return false;

  let ransomNoteCounts = makeCountsMap(ransomNote);
  let magazineCounts = makeCountsMap(magazine);

  for (let [key, value] of ransomNoteCounts) {
    if (!magazineCounts.get(key) || magazineCounts.get(key) < value) {
      return false;
    }
  }

  return true;
};
