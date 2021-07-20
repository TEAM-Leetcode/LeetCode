// https://leetcode.com/problems/find-the-celebrity/

// const graph = [
//   [1, 0, 1],
//   [1, 1, 0],
//   [0, 1, 1],
// ];

const graph = [
  [1, 1, 0],
  [0, 1, 0],
  [1, 1, 1],
];

/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */
const knows = (a, b) => {
  return graph[a][b] === 1;
};

/**
 * @param {function} knows()
 * @return {function}
 */
const solution = function (knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function (n) {
    let indegrees = new Array(n).fill(0);
    let outdegrees = new Array(n).fill(0);

    for (let a = 0; a < n; ++a) {
      for (let b = 0; b < n; ++b) {
        if (a !== b && knows(a, b)) {
          outdegrees[a]++;
          indegrees[b]++;
        }
      }
    }

    for (let i = 0; i < n; ++i) {
      if (outdegrees[i] === 0 && indegrees[i] === n - 1) {
        return i;
      }
    }

    return -1;
  };
};

// brute force solution -> time: O(n2) / space: O(1)
const solution = function (knows) {
  const isCelebrity = (n, i) => {
    for (let j = 0; j < n; ++j) {
      if (i !== j && (!knows(j, i) || knows(i, j))) {
        return false;
      }
    }

    return true;
  };

  return function (n) {
    for (let i = 0; i < n; ++i) {
      if (isCelebrity(n, i)) {
        return i;
      }
    }

    return -1;
  };
};

// logical deduction -> time: O(n) / space: O(1)
const solution = function (knows) {
  const isCelebrity = (n, i) => {
    for (let j = 0; j < n; ++j) {
      if (i !== j && (!knows(j, i) || knows(i, j))) {
        return false;
      }
    }

    return true;
  };

  return function (n) {
    let celebrityCandidate = 0;

    for (let i = 0; i < n; ++i) {
      if (knows(celebrityCandidate, i)) {
        // when celebrity candidates knows i, change the candidate to i
        celebrityCandidate = i;
      }
    }

    return isCelebrity(n, celebrityCandidate) ? celebrityCandidate : -1;
  };
};

// logical deduction cached version
function cached(f) {
  const cache = new Map();
  return function (...args) {
    const cacheKey = args.join(',');
    if (!cache.has(cacheKey)) {
      const value = f(...args);
      cache.set(cacheKey, value);
    }

    return cache.get(cacheKey);
  };
}

function solution(knows) {
  knows = cached(knows);

  function isCelebrity(i, n) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (knows(i, j) || !knows(j, i)) {
        return false;
      }
    }
    return true;
  }

  return function findCelebrity(n) {
    let celebrityCandidate = 0;
    for (let i = 0; i < n; i++) {
      if (knows(celebrityCandidate, i)) {
        celebrityCandidate = i;
      }
    }
    if (isCelebrity(celebrityCandidate, n)) {
      return celebrityCandidate;
    }
    return -1;
  };
}
