/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    // 리턴 어레이를 하나 만듭니다. 0으로 가득 채웁니다.
    let ret = new Array(deck.length);
    for (let i = 0; i < ret.length; i++) {
        ret[i] = 0;
    }

    // 카드 덱을 오름차순으로 정렬합니다
    deck.sort((a, b) => a - b);
    // 리턴 어레이의 첫번째 카드는 제일 작은 숫자의 카드 일 테니
    // 첫 숫자는 덱의 제일 작은 숫자의 카드로 씁니다
    ret[0] = deck[0];
    // 현재 index도 저장합니다
    let index = 0;
    // 정렬 된 덱의 모든 카드를 봅니다 (첫 카드 제외)
    for (let i = 1; i < ret.length; i++) {
        // 그 다음 에 들어갈 index를 찾읍니다. findNextNextIndex 로 찾을 수 있습니다.
        index = findNextNextIndex(ret, index);
        // index에 그에 맞는 카드를 집어 넣읍니다
        ret[index] = deck[i];
    }

    // 위를 반복하면 정답이 나옵니다
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
