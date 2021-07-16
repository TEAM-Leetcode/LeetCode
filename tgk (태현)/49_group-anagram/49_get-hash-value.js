/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // Object 하나 만들고 map이라 명칭합니다. 이걸 map처럼 사용할 것이기 때문입니다
    let map = {};
    // 이 map에 한 key로 values들을 불러오고 싶으면 map[key]로 values들을 부를 수 있습니다

    // for-of 룹 돌립니다
    for (const str of strs) {
        // 보고 있는 string의 숫자 값을 계산합니다
        const val = getPrimedValue(str, str.length);

        // 숫자 값이 map에 없으면 하나 넣어 줍니다. value로 빈 어레이를 넣어주세요
        if (!map[val]) {
            map[val] = [];
        }

        // map[val] 로 어레이를 불러와 거기에 string을 집어 넣습니다
        map[val].push(str);
    }

    // 끝에 Object.values(map) 을 써 한꺼번에 리턴합니다
    return Object.values(map);
};

/**
 * Get primed (hashed) value of string
 * @param {string} str
 * @param {number} strlen
 * @return {number}
 */
var getPrimedValue = function (str, strlen) {
    // 필요한 소수를 여기에 저장합니다.
    const PRIMES = [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
        71, 73, 79, 83, 89, 97, 101, 103,
    ];

    // 리턴 값 1로 먼저 맞춥니다
    let ret = 1;

    // string의 모든 알파벳 하나씩 보고 알파벳에 알맞는 소수를 곱해줍니다
    for (let i = 0; i < strlen; i++) {
        ret *= PRIMES[str.charCodeAt(i) - 97];
    }

    // 리턴 값 되돌려 줍니다
    return ret;
};
