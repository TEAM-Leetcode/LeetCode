var maxPoints = function (points) {
  let sum = 0;
  let absSum = 0;
  let temp = [];

  for (let i = 0; i < points.length; i++) {
    sum += Math.max(...points[i]);
    let eachMax = Math.max(...points[i]);
    let index = points[i].indexOf(eachMax);
    temp.push(index);
  }

  for (let j = 0; j < temp.length - 1; j++) {
    absSum += Math.abs(temp[j] - temp[j + 1]);
    // let difference = Math.abs(temp[j] - temp[j + 1]);
  }

  return sum - absSum;
};

let points = [
  [0, 3, 0, 4, 2],
  [5, 4, 2, 4, 1],
  [5, 0, 0, 5, 1],
  [2, 0, 1, 0, 3],
];

maxPoints(points);

// 08.09(월) 리뷰 때 질문 필요한 부분
