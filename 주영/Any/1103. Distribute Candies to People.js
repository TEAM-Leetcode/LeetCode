/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  let arr = new Array(num_people).fill(0);
  let i = 0;

  while (candies - i > 0) {
    arr[i % num_people] += i + 1;
    i++;
    candies -= i;
  }
  //   console.log('i: ', i);
  //   console.log('candies: ', candies);
  //   console.log('arr: ', arr);

  arr[i % num_people] += candies;

  return arr;
};

let candies = 7,
  num_people = 4;
distributeCandies(candies, num_people);
