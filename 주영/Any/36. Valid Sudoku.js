var isValidSudoku = function (board) {
  let rows = new Set();
  let cols = new Set();
  let boxes = new Set();
  let curRowElem;
  let curColElem;
  let curBoxElem;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      curRowElem = board[i][j];
      curColElem = board[j][i];
    }
  }
  console.log('arr: ', arr);
};

let board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
isValidSudoku(board);

// discussion 봐야할 듯
// 아직은 잘 모르겠음.
