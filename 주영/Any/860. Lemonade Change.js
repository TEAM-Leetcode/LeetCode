var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;

  for (let i = 0; i < bills.length; i++) {
    if (i === 5) five++;
    else if (bills[i] === 10) {
      five--;
      ten++;
    } else if (bills[i] === 20) {
      ten--;
      five--;
    } else five -= 3;

    if (five < 0) return false;

    return true;
  }
};

let bills = [5, 5, 5, 10, 20];

lemonadeChange(bills);

// 다른 사람의 풀이

const lemonadeChange = (bills) => {
  let fiveNum = 0,
    tenNum = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      fiveNum++;
      continue;
    }
    if (bills[i] === 10) {
      fiveNum--;
      tenNum++;
    }
    if (bills[i] === 20) {
      tenNum ? (tenNum--, fiveNum--) : (fiveNum -= 3);
    }
    if (fiveNum < 0) return false;
  }
  return true;
};
