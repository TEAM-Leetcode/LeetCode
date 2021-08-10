var isValidSudoku = function (board) {
  // Set으로 중복을 없애준다.
  let set = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let item = board[i][j];
      // .가 아닌 경우만 체크
      if (item !== '.') {
        // String과 index를 통해 unique한 값을 만들어줌
        let num = item;
        let x = item + 'in row' + j; // x축을 탐색하는 변수 x
        let y = item + 'in column' + i; // y축을 탐색하는 변수 y

        // 9개의 박스 중 몇 번째 박스에 있는지 탐색하는 변수 z
        let z = num + 'in box' + (Math.floor(i / 3) * 3 + Math.floor(j / 3));

        // 중복을 허용하지 않는 set의 특성을 활용한 조건
        if (set.has(x) || set.has(y) || set.has(z)) return false;

        // nested loop을 돌면서 set에 계속 넣어준다.
        set.add(x);
        set.add(y);
        set.add(z);
      }
    }
  }
  return true;
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
