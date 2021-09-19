var findPoisonedDuration = function (timeSeries, duration) {
  let answer = duration;

  for (let i = 1; i < timeSeries.length; i++) {
    answer += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
  }
  return answer;
};
