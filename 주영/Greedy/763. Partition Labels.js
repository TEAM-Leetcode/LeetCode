/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let map = new Map();
  let partition = [];
  let partitionIndex = 0;
  let lastIndex = 0;

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }

  for (let i = 0; i < s.length; i++) {
    lastIndex = Math.max(lastIndex, map.get(s[i]));

    if (lastIndex === i) {
      partition.push(i + 1 - partitionIndex);
      partitionIndex = i + 1;
    }
  }

  return partition;
};

// 처음 a가 나올때랑, 마지막 a가 나올때를 알고 있어야 함.

// hash 값의 key를 해당 알파벳으로
// value 값을 해당 알파벳이 마지막으로 등장할 때의 인덱스로 지정

let s = 'ababcbacadefegdehijhklij';
partitionLabels(s);

// 다른 사람의 풀이
var partitionLabels = function (s) {
  const memo = {};
  const result = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    memo[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    end = Math.max(memo[s[i]], end);

    if (end === i) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }
  return result;
};
