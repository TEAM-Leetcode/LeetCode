/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
    const n = land.length,
        m = land[0].length;
    let row = 0,
        col = 0;
    const ret = [];

    while (row < n) {
        if (land[row][col]) {
            const area = [row, col];

            let index = row;
            while (index + 1 < n && land[index + 1][col]) {
                index++;
            }
            area.push(index);
            index = col;
            while (index + 1 < m && land[row][index + 1]) {
                index++;
            }
            area.push(index);
            ret.push(area);
            for (let i = row; i <= area[2]; i++) {
                for (let j = col; j <= area[3]; j++) {
                    land[i][j] = 0;
                }
            }
        }

        col++;
        if (col === m) {
            col = 0;
            row++;
        }
    }

    console.table(land);
    console.table(ret);
    return ret;
};

const land = [
    [1, 1],
    [1, 1],
];

findFarmland(land);
