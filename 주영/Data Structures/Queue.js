function Queue() {
  var items = [];

  this.enqueue = function (element) {
    items.push(element);
  };
  this.dequeue = function () {
    return items.shift();
  };
  this.front = function () {
    return items[0];
  };
  this.isEmpty = function () {
    return items.length === 0;
  };
  this.size = function () {
    return items.length;
  };
  this.print = function () {
    console.log(items);
  };
}

// const queue = new Queue();

// console.log(queue.isEmpty()); // true

// queue.enqueue('John');
// queue.enqueue('Jack');
// queue.enqueue('Camilla');

// queue.print(); // [ 'John', 'Jack', 'Camilla' ]
// console.log(queue.size()); // 3
// console.log(queue.isEmpty()); // false

// queue.dequeue();
// queue.dequeue();
// queue.print(); // [ 'Camilla' ]

// Circular Queue (Hot Potato Game)
// nameList: 게임에 참여한 사람들의 이름, num: 큐를 순회할 횟수
function hotPotato(nameList, num) {
  let queue = new Queue();

  for (let i = 0; i < nameList.length; i++) queue.enqueue(nameList[i]);

  let eliminated = '';
  // 최후의 1인이 남을 때까지
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) queue.enqueue(queue.dequeue()); // 맨 앞의 원소를 꺼내어 맨 뒤로 넣는다.
    eliminated = queue.dequeue(); // num만큼 반복이 끝난 후 뜨거운 감자를 들고 있던 사람을 퇴장시킨다.
    console.log(`${eliminated}을(를) 게임에서 퇴장시킵니다.`);
  }
  return queue.front(); // 마지막 사람이 승자가 된다.
}

const names = ['John', 'Jack', 'Camilla', 'Ingrid', 'Carl'];
const winner = hotPotato(names, 7);
console.log(`승자는 ${winner} 입니다.`);

// 결과
// Camilla을(를) 게임에서 퇴장시킵니다.
// Jack을(를) 게임에서 퇴장시킵니다.
// Carl을(를) 게임에서 퇴장시킵니다.
// Ingrid을(를) 게임에서 퇴장시킵니다.
// 승자는 John 입니다.
