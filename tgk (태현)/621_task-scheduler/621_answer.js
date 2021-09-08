/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    if (n === 0) {
        return tasks.length;
    }

    const tasksObj = {};

    for (const task of tasks) {
        tasksObj[task] = (tasksObj[task] ?? 0) + 1;
    }

    let maxFrequency = Math.max(...Object.values(tasksObj));
    const schedule = [];
    while (maxFrequency > 0) {
        const listOfTasks = [];
        for (const task of Object.keys(tasksObj)) {
            if (tasksObj[task] === maxFrequency) {
                listOfTasks.push(task);
                tasksObj[task]--;
            }
        }

        if (maxFrequency > 1 && listOfTasks.length < n + 1) {
            listOfTasks.length = n + 1;
            Array.from(listOfTasks);
        }

        schedule.push(...listOfTasks);
        maxFrequency--;
    }

    return schedule.length;
};

const tasks = ['A', 'A', 'A', 'B', 'B', 'B'],
    n = 0;

console.log(leastInterval(tasks, n));
