var combinationSum = function (candidates, target) {
  let answer = [];

  const backTracking = (prevIndex, targetSum, comb) => {
    if (targetSum === 0) answer.push([...comb]);
    else if (targetSum < 0) return;

    for (let i = prevIndex; i < candidates.length; i++) {
      comb.push(candidates[i]);
      backTracking(i, targetSum - candidates[i], comb);
      comb.pop();
    }
  };

  backTracking(0, target, []);

  // console.log('answer: ', answer);
  return answer;
};

let candidates = [1, 2, 3];
let target = 5;
combinationSum(candidates, target);

// 선택된 것보다 작은 수는 안된다.(조합 경우에서 중복을 피하기 위해)
//  선택된 경우(decision space)  1, 2, 3
// 합이 5가 될 수 있는 수      4    3    2
//                           1,2,3  2,3    3
