function PrirorityQueue() {
  let items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority; // 우선순위(priority)가 추가됨
  }

  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
      items.push(queueElement); // 큐가 비어있다면 원소를 그냥 넣는다.
    }
    // general case
    else {
      let added = false;
      for (let i = 0; i < items.length; i++) {
        // 만약 우선순위가 더 높은 원소가 들어왔다면
        if (queueElement.priority < items[i].priority) {
          // 해당 위치에 원소를 추가한다.
          items.splice(i, 0, queueElement);
          added = true;
          break; // 루프문 종료
        }
      }
      // 만약 새 원소의 우선순위가 가장 낮다면
      if (!added) {
        items.push(queueElement);
      }
    }
  };
  this.isEmpty = function () {
    return items.length === 0;
  };
  this.print = function () {
    console.log(items);
  };
}

const priorityQueue = new PrirorityQueue();
priorityQueue.enqueue('John', 2);
priorityQueue.enqueue('Jack', 1);
priorityQueue.enqueue('Camilla', 3);
priorityQueue.print();

// 실행결과: [ QueueElement { element: 'Jack', priority: 1 },
//             QueueElement { element: 'John', priority: 2 },
//             QueueElement { element: 'Camilla', priority: 3 } ]
