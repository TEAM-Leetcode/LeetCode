// 2021.06.21
// https://leetcode.com/problems/island-perimeter/
const islandPerimeter = function (grid) {
    let perimeter = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4;
                // 0은 false
                if (grid[i - 1] && grid[i - 1][j]) perimeter--; // 위
                if (grid[i + 1] && grid[i + 1][j]) perimeter--; // 아래
                if (grid[i] && grid[i][j - 1]) perimeter--; // 왼쪽
                if (grid[i] && grid[i][j + 1]) perimeter--; // 오른쪽
            }
        }
    }
    return perimeter;
};
console.log(
    islandPerimeter([
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
    ])
);
