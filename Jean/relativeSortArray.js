'use strict';

const relativeSortArray = function(arr1, arr2) {
  const map = new Map();
  const n = arr2.length;
  
  arr2.forEach((elem, i) => {
    map.set(elem, i);
  });
  return arr1.sort((a, b) => {
    a = map.has(a) ? map.get(a) : n + a;
    b = map.has(b) ? map.get(b) : n + b;
    return a - b;
  });
};