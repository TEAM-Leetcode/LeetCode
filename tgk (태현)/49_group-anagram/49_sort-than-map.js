/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // Object 하나 만들고 map이라 명칭합니다. 이걸 map처럼 사용할 것이기 때문입니다
    let map = {};

    // for-of 룹 돌립니다
    for (const str of strs) {
        // 지금 보고 있는 string을 알파벳 순서로 정렬합니다
        const sorted = str.split('').sort().join('');

        // 정렬 된 string이 map에 없으면 하나 넣어 줍니다. value로 빈 어레이를 넣어주세요
        if (!map[sorted]) {
            map[sorted] = [];
        }

        // map[val] 로 어레이를 불러와 거기에 string을 집어 넣습니다
        map[sorted].push(str);
    }

    // 끝에 Object.values(map) 을 써 한꺼번에 리턴합니다
    return Object.values(map);
};
