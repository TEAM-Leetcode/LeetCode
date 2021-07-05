// https://leetcode.com/problems/lemonade-change/

var bills1 = [5, 5, 5, 10, 20];
// Output: true
// Explanation:
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.

var bills2 = [5, 5, 10];
// Output: true

var bills3 = [10, 10];
// Output: false

var bills4 = [5, 5, 10, 10, 20];
// Output: false
// Explanation:
// From the first two customers in order, we collect two $5 bills.
// For the next two customers in order, we collect a $10 bill and give back a $5 bill.
// For the last customer, we can't give change of $15 back because we only have two $10 bills.
// Since not every customer received correct change, the answer is false.

const lemonadeChange = function (bills) {
  let pocket = { 5: 0, 10: 0 };
  let result = true;

  for (let i = 0; i < bills.length && result; ++i) {
    if (bills[i] === 5) {
      pocket[5]++;
    } else if (bills[i] === 10) {
      if (pocket[5] >= 1) {
        pocket[5]--;
        pocket[10]++;
      } else {
        result = false;
      }
    } else if (bills[i] === 20) {
      if (pocket[10] >= 1 && pocket[5] >= 1) {
        pocket[10]--;
        pocket[5]--;
      } else if (pocket[5] >= 3) {
        pocket[5] -= 3;
      } else {
        result = false;
      }
    }
  }

  return result;
};

console.log(lemonadeChange(bills1));
console.log(lemonadeChange(bills2));
console.log(lemonadeChange(bills3));
console.log(lemonadeChange(bills4));
