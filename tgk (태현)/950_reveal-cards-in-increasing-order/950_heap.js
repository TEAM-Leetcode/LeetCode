/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    // 덱의 크기를 찾습니다
    const lenOfArray = deck.length;

    // 리턴 어레이를 만들고 0으로 가득 채웁니다
    let ret = new Array(lenOfArray);
    for (let i = 0; i < lenOfArray; i++) {
        ret[i] = 0;
    }

    // 덱을 min-heapify를 합니다. 마지막에 덱 첫번째 카드는 제일 작은 카드가 되야 합니다.
    for (let i = ((lenOfArray / 2) >> 0) - 1; i >= 0; i--) {
        heapify(deck, lenOfArray, i);
    }

    // ret에 집어넣는 index를 볼 수 있게 만들고 룹 시작합니다
    let index = 0;
    for (let i = lenOfArray - 1; i > 0; i--) {
        // 덱 첫번째 카드는 제일 작은 카드니 ret[index]에 넣어 줍니다
        ret[index] = deck[0];

        // 덱 첫번째 카드를 맨 뒤로 보냅니다. 이제 이 카드는 필요 없기 때문입니다
        deck[0] = deck[i];
        deck[i] = ret[index];

        // 그 다음 ret에 들어갈 수 있는 index를 찾습니다.
        index = findNextNextIndex(ret, index);

        // 맨 밑장 뺀 댁을 heapify 다시 합니다.
        heapify(deck, i, 0);
        // 위로 돌아갈 때 그 다음 작은 카드가 위에 있어야 합니다
    }

    // 위 루프에서 마지막 카드 빼먹었죠? 집어 넣어야 합니다
    ret[index] = deck[0];

    // 리턴 어레이를 되돌려 주면 끝입니다
    return ret;
};

/**
 * Find the next next available index from the given index of the deck
 * @param {number[]} array
 * @param {number} index
 * @return {number}
 */
var findNextNextIndex = function (array, index) {
    // 리턴 숫자를 index로 맞춥니다.
    let ret = index;

    // 이제 index후 array에 있는 빈 공간을 찾습니다.
    // ret = (ret + 1) % array.length 를 쓰면 ret가 어레이 끝에 가도 다시 처음으로 돌아갈 수 있습니다
    while (array[ret] !== 0) {
        ret = (ret + 1) % array.length;
    }

    // 우리가 결정적으로 원하는 건 index 후 빈 공간이 아니죠. index 후 빈 공간 후 빈 공간이 되겠습니다 (첫 빈 공간은 스킵 합니다)
    ret = (ret + 1) % array.length;

    // 똑같이 따라합니다.
    while (array[ret] !== 0) {
        ret = (ret + 1) % array.length;
    }

    // 리턴 숫자를 되돌리면 끝입니다
    return ret;
};

/**
 * heapify array
 * @param {number[]} array
 * @param {number} lenOfArray
 * @param {number} root
 * @return {null}
 */
var heapify = function (array, lenOfArray, root) {
    // heapify는 사람들이 안다고 가정해서 설명 더 안 붙이겠습니다
    let smallest = root;
    let l = 2 * root + 1;
    let r = 2 * root + 2;

    if (l < lenOfArray && array[l] < array[smallest]) {
        smallest = l;
    }

    if (r < lenOfArray && array[r] < array[smallest]) {
        smallest = r;
    }

    if (smallest != root) {
        let swap = array[root];
        array[root] = array[smallest];
        array[smallest] = swap;

        heapify(array, lenOfArray, smallest);
    }
};
