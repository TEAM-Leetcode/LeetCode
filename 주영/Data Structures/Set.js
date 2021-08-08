function Set() {
  var items = {};

  this.has = function (value) {
    return value in items;
    // return items.hasOwnProperty(value)
    // 이 방법이 상속받은 객체의 프로퍼티는 확인하지 않고
    // 대상 객체 고유의 프로퍼티만 확인하므로 더 권장된다.
  };

  this.add = function (value) {
    // value가 이미 Set에 포함되어 있는 확인 필요
    if (!this.has(value)) {
      items[value] = value; // 키와 값을 동일하게 저장하는 이유는 나중에 편하라고. 딱히 이유는 없다.
      return true;
    }
    return false;
  };

  this.remove = function (value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  this.clear = function () {
    items = {};
  };

  this.size = function () {
    return Object.keys(items).length; // 책에서의 두번 째 방법
  };

  // 두 번째 방법
  this.size = function () {
    let count = 0;
    for (let prop in items) {
      if (items.hasOwnProperty(prop)) ++count;
    }
    return count;
  };

  this.values = function () {
    return Object.values(items);
  };

  // union
  this.union = function (otherSet) {
    const unionSet = new Set();
    var values = this.values();

    for (let i = 0; i < values.length; i++) unionSet.add(values[i]);

    var values = otherSet.values();
    for (let i = 0; i < values.length; i++) unionSet.add(values[i]);

    return unionSet;
  };

  // intersection
  this.intersection = function (otherSet) {
    let intersectionSet = new Set();
    var values = this.values();

    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) intersectionSet.add(values[i]);
    }

    return intersectionSet;
  };

  // difference
  this.difference = function (otherSet) {
    const differenceSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) differenceSet.add(values[i]);
    }
    return differenceSet;
  };

  // subset
  this.subset = function (otherSet) {
    if (this.size() > otherSet.size()) return false;
    else {
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) return false;
      }
      return true;
    }
  };

  this.showValues = function () {
    return console.log(Object.values(items));
  };
}

const set = new Set();
set.add(1);
set.add(2);
set.add(3);

const set2 = new Set();
set.add(3);
set.add(4);
set.add(5);
set.add(6);

let unionAB = set.union(set2);
console.log(unionAB.values()); // 1,2,3,4,5,6
