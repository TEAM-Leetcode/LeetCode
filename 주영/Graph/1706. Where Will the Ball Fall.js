const solution = grid => {
  let answer = [];
  for (let i = 0; i < grid[0].length; i++) answer[i] = roll(i, grid);

  return answer;
};

const roll = (i, grid) => {
  let prev;

  for (let j = 0; j < grid.length; j++) {
    prev = grid[j][i];
    i += prev;

    if (i < 0 || i >= grid[0].length) return -1;
    if (prev === 1 && grid[j][i] === -1) return -1;
    if (prev === -1 && grid[j][i] === 1) return -1;
  }
  return i;
};

let grid = [
  [1, 1, 1, -1, -1],
  [1, 1, 1, -1, -1],
  [-1, -1, -1, 1, 1],
  [1, 1, 1, 1, -1],
  [-1, -1, -1, -1, -1],
];

solution(grid);
