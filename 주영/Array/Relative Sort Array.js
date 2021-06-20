// 내가 푼 방법
var relativeSortArray = function (arr1, arr2) {
  let newArr1 = [];
  let newArr2 = [];

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        newArr1.push(arr1[j]);
      }
    }
  }
  for (let k = 0; k < arr1.length; k++) {
    if (!newArr1.includes(arr1[k])) newArr2.push(arr1[k]);
  }

  newArr2 = newArr2.sort((a, b) => a - b);

  let answer = [...newArr1, ...newArr2];

  return answer;
};

// 방법1: chaeyeon님 풀이
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
  console.log('helperArr: ', helperArr);
  console.log('arr1: ', arr1);

  arr1.unshift(...helperArr);

  return arr1;
};

// 방법2: map, filter 메소드 사용
var relativeSortArray = function (arr1, arr2) {
  var part1 = arr2.map((x) => arr1.filter((y) => y == x)).flat(); // depth: 1
  console.log('part1: ', part1);
  var part2 = arr1.filter((x) => !arr2.includes(x)).sort((a, b) => a - b);
  return [...part1, ...part2];
};

// -----------------------------------------------------------------------------------------------------------------//
// flat(): 모든 "하위 배열 요소"를 "지정한 깊이"까지 재귀적으로 이어붙인 새로운 배열을 생성합니다.
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// -----------------------------------------------------------------------------------------------------------------//

// Hash
var relativeSortArray = function (arr1, arr2) {
  const lookup = new Map();

  const N = arr2.length; // 문제 예시로는 6
  arr2.forEach((a, i) => {
    lookup.set(a, i);
    // console.log('lookup: ', lookup);
  });
  // console.log('lookup: ', lookup);
  return arr1.sort((a, b) => {
    a = lookup.has(a) ? lookup.get(a) : N + a; // map에 key가 있으면 === array2에 해당하는 값이 true라면 ? a(===value) = 인덱스 : N+a는 뭐지
    b = lookup.has(b) ? lookup.get(b) : N + b;
    console.log('a: ', a);
    console.log('b:', b);

    return a - b;
  });
};
// 근데 되게 느리다.
// sort안에서 has, get하기 때문??

// Hash(optimal)
var relativeSortArray = function (arr1, arr2) {
  let h = {};
  for (let i = 0; i < arr2.length; ++i) h[arr2[i]] = i;
  console.log('h: ', h);
  for (const i of arr1) {
    if (!(i in h)) h[i] = 1000 + i; // arr2에 속하지 않는 요소 그냥 뒤로 빼려고 1000이라는 큰 수를 넣은 듯
  }
  arr1.sort((a, b) => h[a] - h[b]); // 객체의 value 순서대로 정렬
  return arr1;
};

let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
let arr2 = [2, 1, 4, 3, 9, 6];

[2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19];

relativeSortArray(arr1, arr2);
