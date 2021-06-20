// https://leetcode.com/problems/relative-sort-array/

//92 ms
const relativeSortArray = function (arr1, arr2) {
    // 오름차순 숫자 정렬 - [1, 2, 2, 2, 3, 3, 4, 6, 7, 9, 19]
    arr1.sort((a, b) => a - b);
    let helperArr = []; // 헬퍼 배열 (arr1에서 arr2의 추출한 값들을 저장)

    arr2.forEach((key) => {
        arr1 = arr1.filter((val) => {
            if (val === key) helperArr.push(val);
            else return true;
        });
    });
    arr1.unshift(...helperArr);
    return arr1;
};
// console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))

// ------------------------------------------------------------------------------

// 76 ms - 속도가 더 빠르네..
const relativeSortArray2 = function (arr1, arr2) {
    // 오름차순 숫자 정렬 - [1, 2, 2, 2, 3, 3, 4, 6, 7, 9, 19]
    arr1.sort((a, b) => a - b);
    let helperArr = []; // 헬퍼 배열

    arr2.filter((val) => {
        let count = 0;

        // arr2의 값들을 arr1을 배열에서 몇개씩 있는지 카운트
        for (let i = 0; i < arr1.length; i++) {
            if (val === arr1[i]) count++;
        }
        // 카운트된만큼 헬퍼 배열에 삽입
        for (let j = 0; j < count; j++) {
            helperArr.push(val);
        }
    });

    // helperArr - [2, 2, 2, 1, 4, 3, 3, 9, 6]

    arr1.filter((val, i) => {
        // helperArr에 arr1 없는값을 찾아서 삽입
        if (arr2.indexOf(val) === -1) helperArr.push(val);

        // arr1을 helperArr로 교체
        arr1[i] = helperArr[i];
    });
    return arr1;
};
// console.log(relativeSortArray2([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))

// ------------------------------------------------------------------------------

// 능력자의 답 -> Map 이용
const relativeSortArray3 = function (arr1, arr2) {
    const lookup = new Map();
    const N = arr2.length; // 6
    arr2.forEach((a, i) => {
        lookup.set(a, i);
    });
    return arr1.sort((a, b) => {
        a = lookup.has(a) ? lookup.get(a) : N + a;
        b = lookup.has(b) ? lookup.get(b) : N + b;

        // a에서 b를 뺀 결과가 음수면 a가 b보다 작고, 0이면 같다
        // sort메소드는 return 값이 음수,양수,0인지에 따라서 순서를 정한다.
        return a - b;
    });
};
