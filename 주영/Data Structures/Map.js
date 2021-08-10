function Dictionary() {
  const items = {};

  this.has = function (key) {
    return key in items;
  };

  this.set = function (key, value) {
    items[key] = value;
  };

  this.remove = function (key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };
  this.get = function (key) {
    return this.has(key) ? items[key] : undefined;
  };
  this.values = function () {
    const values = [];
    for (let k in items) {
      if (this.has(k)) values.push(items[k]);
    }
    return values;
  };
  this.getItems = function () {
    return items;
  };

  this.keys = function () {
    return Object.keys(items);
  };

  this.size = function () {
    return Object.keys(items).length;
  };
}

var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.has('Gandalf')); // true
console.log(dictionary.values()); // [ 'gandalf@email.com', 'johnsnow@email.com', 'tyrion@email.com' ]
console.log(dictionary.get('Tyrion')); // tyrion@email.com

// dictionary.remove('John');

console.log(dictionary.keys()); // [ 'Gandalf', 'Tyrion' ]
console.log(dictionary.size()); // 3

function HashTable() {
  var table = {};

  this.put = function (key, value) {
    var position = loseloseHashCode(key); // 인자 key를 해시 함수에 넣고 반환된 결과 값(position)으로 테이블에서 찾아야 한다.
    console.log(`${position}: ${key}`); // 확인용. 빼고 싶으면 빼도 된다.
    table[position] = value;
  };
}

var loseloseHashCode = function (key) {
  var hash = 0;
  for (var i = 0; i < key.length; i++) hash += key.charCodeAt(i); // 문자 별 아스키 값을 hash에 더한다.
  return hash % 37; // 아스키 수치가 작은 영역이 있음을 감안해 hash를 임의의 숫자로 나눈 나머지를 최종 값으로 반환한다.
};
