/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    /**
     * 맵 (여기선 object) 과 Set을 써서 두 문장이 '동형'한 지 알아보는 방식입니다
     * s.charAt(i)대신 s.charCodeAt(i)를 쓴 이유는 string 둘을 비교하기보다 숫자 둘을 비교하는게
     * 더 빠르기 (더 빠르다고 생각했기) 때문입니다.
     * s와 t의 알파벳을 하나씩 보면서 맵과 Set을 채웁니다.
     * 맵은 { s[i]: t[i] }의 형식으로 채워지고
     * Set은 t의 알파벳으로 채워 집니다
     */

    // s와 t의 길이가 다르면 false를 리턴합니다
    if (s.length !== t.length) {
        return false;
    }

    // 맵과 Set입니다
    const S_TO_T = {};
    const T_SET = new Set();

    let len = s.length;

    for (let i = 0; i < len; i++) {
        // s[i]와 t[i]의 ASCII값을 구합니다
        const sCode = s.charCodeAt(i);
        const tCode = t.charCodeAt(i);

        // s[i] 가 맵에 없으면...
        if (!S_TO_T[sCode]) {
            // Set에 t[i] 가 없는지 확인하며 t[i]가 이미 다른 s[i]에 먼저 연결 되었는지 봅니다...
            if (T_SET.has(tCode)) {
                // 이미 연결되면 false를 리턴합니다
                return false;
            }
            // 아니면 맵과 Set에 s[i]와 t[i]를 알맞게 넣습니다
            S_TO_T[sCode] = tCode;
            T_SET.add(tCode);
        }
        // ... 있으면 ...
        else {
            // s[i]에 맵 된 알파벳을 보고 t[i]와 같은지 봅니다.
            // 같지 않으면 false를 리턴 합니다
            if (S_TO_T[sCode] !== tCode) {
                return false;
            }
        }
    }

    // 위에서 무사히 통과되면 true를 리턴합니다
    return true;
};

console.log(isIsomorphic('egg', 'add'));
