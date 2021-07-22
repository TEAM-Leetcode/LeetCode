/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    let n = image.length;

    for (let row of image) {
        for (let i = 0; i < n / 2; i++) {
            [row[i], row[n - i - 1]] = [row[n - i - 1], row[i]];
            row[i] = row[i] === 1 ? 0 : 1;
            if (i !== n - i - 1) {
                row[n - i - 1] = row[n - i - 1] === 1 ? 0 : 1;
            }
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
