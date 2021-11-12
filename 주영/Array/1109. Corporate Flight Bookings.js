// Optimal
var corpFlightBookings = function (bookings, n) {
  const count = new Array(n + 1).fill(0);

  for (const [start, end, seats] of bookings) {
    count[start] += seats;
    count[end + 1] -= seats;
  }

  const res = [];
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += count[i];
    res.push(sum);
  }

  return res;
};

let bookings = [
  [1, 2, 10],
  [2, 3, 20],
  [2, 5, 25],
];
let n = 5;
corpFlightBookings(bookings, n);

// Brute force
var corpFlightBookings = function (bookings, n) {
  let answer = new Array(n).fill(0);

  for (let i = 0; i < bookings.length; i++) {
    let cur = bookings[i];
    for (let j = cur[0]; j <= cur[1]; j++) {
      answer[j - 1] += cur[2];
    }
  }
  return answer;
};
