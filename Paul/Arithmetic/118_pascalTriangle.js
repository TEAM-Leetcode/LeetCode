var numRows = 5;
//Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

var numRows = 1;
//Output: [[1]]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generateA = function (numRows) {
  let result = [];

  for (let i = 0; i < numRows; ++i) {
    let row = new Array(i + 1).fill(1);

    for (let j = 1; i > 1 && j < i; ++j) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }

    result.push(row);
  }

  return result;
};

console.log(generateA(5));

// leetcode solution
var generateB = function (numRows) {
  var pascal = [];
  for (var i = 0; i < numRows; i++) {
    pascal[i] = [];
    pascal[i][0] = 1;
    for (var j = 1; j < i; j++) {
      pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
    }
    pascal[i][i] = 1;
  }
  return pascal;
};
