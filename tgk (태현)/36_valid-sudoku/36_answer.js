/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    var set = new Set();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let char = board[i][j];
            if (char !== '.') {
                let num = char - '0';
                let x = num + ' in row ' + j;
                let y = num + ' in column ' + i;
                let z =
                    num +
                    ' in box ' +
                    (Math.floor(i / 3) * 3 + Math.floor(j / 3));
                if (set.has(x) || set.has(y) || set.has(z)) return false;
                set.add(x);
                set.add(y);
                set.add(z);
            }
        }
    }

    return true;
};
