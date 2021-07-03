var arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
var arr2 = [2, 1, 4, 3, 9, 6];
// output: [2,2,2,1,4,3,3,9,6,7,19]

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArrayV1 = function (arr1, arr2) {
  let included = [];
  let excluded = [];

  for (let i = 0; i < arr2.length; ++i) {
    for (let j = 0; j < arr1.length; ++j) {
      if (arr2[i] === arr1[j]) {
        included.push(arr2[i]);
      }
    }
  }

  for (let i = 0; i < arr1.length; ++i) {
    if (!arr2.includes(arr1[i])) {
      excluded.push(arr1[i]);
    }
  }

  excluded.sort((a, b) => a - b);

  return included.concat(excluded);
};

// console.log(relativeSortArrayV1(arr1, arr2));

var relativeSortArrayV2 = function (arr1, arr2) {
  let array = [];

  for (let i = 0; i < arr2.length; ++i) {
    array.push(...arr1.filter((val) => val === arr2[i]));
  }

  array.push(...arr1.filter((val) => !arr2.includes(val)).sort((a, b) => a - b));

  return array;
};

// console.log(relativeSortArrayV2(arr1, arr2));

// Solutions found on Leetcodes
// using Map
var relativeSortArrayA = function (arr1, arr2) {
  const lookup = new Map();
  const N = arr2.length;
  arr2.forEach((a, i) => {
    lookup.set(a, i);
  });
  return arr1.sort((a, b) => {
    a = lookup.has(a) ? lookup.get(a) : N + a;
    b = lookup.has(b) ? lookup.get(b) : N + b;
    return a - b;
  });
};

// using filter and concat
var relativeSortArrayB = function (arr1, arr2) {
  let res = [];

  for (let i = 0; i < arr2.length; i++) {
    // find all matching numbers in arr1 and add to array
    res = res.concat(arr1.filter((j) => j === arr2[i]));

    // remove these numbers from arr1
    arr1 = arr1.filter((j) => j !== arr2[i]);
  }

  // remaining numbers in arr1 are not in arr2
  // sort in ascending order
  return res.concat(arr1.sort((a, b) => a - b));
};

// using traditional object
var relativeSortArrayC = function (arr1, arr2) {
  const countMapping = {};
  const solArr = [];
  const restArr = [];

  for (const val of arr2) {
    countMapping[val] = 0;
  }

  for (const val of arr1) {
    if (countMapping[val] >= 0) {
      countMapping[val]++;
    } else {
      restArr.push(val);
    }
  }

  for (const val of arr2) {
    for (let i = 0; i < countMapping[val]; i++) {
      solArr.push(val);
    }
  }

  return [...solArr, ...restArr.sort((a, b) => (a > b ? 1 : -1))];
};
