// 해설: https://velog.io/@ken1204/46.-Permutations-1s8ja8ff

var permute = function (nums) {
  let answer = [];

  const backTracking = (level, letters) => {
    console.log('letters: ', letters);
    if (level === nums.length) {
      answer.push([...letters]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (letters.includes(nums[i])) continue;
      letters.push(nums[i]);
      backTracking(level + 1, letters);
      letters.pop();
    }
  };

  backTracking(0, []);

  // console.log('answer: ', answer);
  return answer;
};

let nums = [1, 2, 3];
permute(nums);
// BackTracking은 가능성을 탐색하는 알고리즘
// ex) [_, _, _] 이렇게 3개의 공간에 가능성을 채워 나가보자.
