var findJudge = function (n, trust) {
  let obj = {};
  // 추가적으로 모든 사람이 judge를 믿는 경우 / 믿지 않는 경우를 생각했어야 함.
  for (let k = 0; k < n; k++) obj[k + 1] = 0;
  for (let i = 0; i < trust.length; i++) {
    // obj[trust[i][0]] = 1;
    obj[trust[i][0]]--;
    obj[trust[i][1]]++;
  }
  console.log(obj);
  for (const [key, value] of Object.entries(obj)) {
    // if(value === 0) return key
    if (value === n - 1) return key;
  }
  return -1;
};

// Discuss
var findJudge = function (n, trust) {
  const counts = new Array(n + 1).fill(0);

  for (let [i, j] of trust) {
    counts[i]--;
    counts[j]++;
  }

  console.log(counts);

  for (let i = 1; i < counts.length; i++) {
    if (n - 1 === counts[i]) return i;
  }

  return -1;
};

let n = 4;
let trust = [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
];

findJudge(n, trust);
