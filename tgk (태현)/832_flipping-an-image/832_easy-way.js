/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    let n = image.length;

    for (let row of image) {
        row.reverse();
        for (let i = 0; i < n; i++) {
            row[i] = row[i] === 0 ? 1 : 0;
        }
    }

    return image;
};

console.table(
    flipAndInvertImage([
        [1, 1, 0, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 1],
        [1, 0, 1, 0],
    ])
);
