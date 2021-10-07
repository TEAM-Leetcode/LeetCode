/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let acc = 0;
    for (let i = 1; i < timeSeries.length; i++) {
        const timeDiff = timeSeries[i] - timeSeries[i - 1];
        acc += Math.min(timeDiff, duration);
    }

    return acc + duration;
};
