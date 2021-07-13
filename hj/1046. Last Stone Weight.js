var lastStoneWeight = function(stones) {
  let max_x, max_y;
  let index, result;
  
  // 돌이 1개 이상 이라면 반복
  while (stones.length > 1) {
      // 1. 최댓값 2개 찾아서 삭제
          // 1.1. 최댓값 구하기
      max_x = Math.max.apply(null, stones);
      // Math.max(...stones);
          // 1.1. 최댓값 배열에서 삭제
          // 1.1.1. 최댓값 인덱스 찾기
      index = stones.indexOf(max_x);
          // 1.1.2. 배열에서 최댓값 삭제
      stones.splice(index, 1);
          // 1.2. 두 번째 최댓값
      max_y = Math.max.apply(null, stones);
      index = stones.indexOf(max_y);
      stones.splice(index, 1);
      
      // 2. 두 수 빼기
      result = max_x > max_y ? max_x - max_y : max_y - max_x;
      if (result !== 0) 
          // 배열 더하기
          stones.unshift(result);
  }
  return stones;
};