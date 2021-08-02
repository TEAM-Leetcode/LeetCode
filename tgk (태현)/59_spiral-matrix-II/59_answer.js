/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    /**
     * 매트릭스에 숫자 하나씩 넣으며 푸는 방식 입니다
     */

    // 매트릭스 n * n 크기로 하나 장만 합니다
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

    // index i와 j를 준비합니다
    let i = 0,
        j = 0;

    // matrix[0][0]은 1입니다
    matrix[i][j] = 1;

    // count (넣을 숫자)와 target (넣을 수 있는 최대 숫자)를 준비합니다
    let count = 1,
        target = n * n;

    // 여기 있는 boolean들은 조종키라고 생각하시면 되겠습니다
    // goLeft가 true면 왼쪽으로 가고, goDown이 true면 밑으로 가는 방식입니다
    let goLeft = true,
        goDown = false,
        goRight = false,
        goUp = false;

    // count + 1 <= target이 될 때 까지 밑 과정을 반복합니다
    // count + 1이 target을 초과하는 경우 넣을 수 있는 숫자 모두 넣었기 때문입니다
    while (count < target) {
        // 왼쪽으로 가야할 경우...
        if (goLeft) {
            //... 왼쪽으로 갈 수 있는지 부터 확인합니다
            // j + 1이 n을 초과하거나 matrix[i][j + 1]가 0(초기값)일 경우
            // goLeft를 끄고 goDown을 켭니다
            // 왼쪽으로 갈 수 있을 경우 왼쪽으로 갑니다
            if (j + 1 >= n || matrix[i][j + 1] !== 0) {
                goLeft = false;
                goDown = true;
            } else {
                matrix[i][++j] = ++count;
            }
        }
        // 아래로 가야 할 경우...
        else if (goDown) {
            // 뭐 거의 똑같습니다
            if (i + 1 >= n || matrix[i + 1][j] !== 0) {
                goDown = false;
                goRight = true;
            } else {
                matrix[++i][j] = ++count;
            }
        } else if (goRight) {
            if (j - 1 < 0 || matrix[i][j - 1] !== 0) {
                goRight = false;
                goUp = true;
            } else {
                matrix[i][--j] = ++count;
            }
        } else if (goUp) {
            if (i - 1 < 0 || matrix[i - 1][j] !== 0) {
                goUp = false;
                goLeft = true;
            } else {
                matrix[--i][j] = ++count;
            }
        }
    }

    return matrix;
};

console.table(generateMatrix(5));
