// https://leetcode.com/problems/find-the-town-judge/

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (n, trust) {
  // initialize with '0' with the length of 'n + 1' to keep track of the 'number of trusts'
  // between people who are labeled from '1 to n'
  let indegrees = new Array(n + 1).fill(0);
  let outdegrees = new Array(n + 1).fill(0);

  for (let [a, b] of trust) {
    indegrees[b]++; // b is trusted by a
    outdegrees[a]++; // a trusts b
  }

  for (let i = 1; i <= n; ++i) {
    if (outdegrees[i] === 0 && indegrees[i] === n - 1) {
      // judge trusts nobody AND is trusted by everyone except for himself (n - 1)
      return i;
    }
  }

  return -1;
};

const findJudge = function (n, trust) {
  // build a single array with the result of indegree - outdegree for each person
  let trustScores = new Array(n + 1).fill(0);

  for (let [a, b] of trust) {
    trustScores[a]--; // decrement when the person trusts
    trustScores[b]++; // increment when the person gets trusted by other
  }

  for (let i = 1; i <= n; ++i) {
    if (trustScores[i] === n - 1) {
      // the maximum value is the maximum indegree (n - 1) - the minimum outdegree (0)  -> judge
      return i;
    }
  }

  return -1;
};
