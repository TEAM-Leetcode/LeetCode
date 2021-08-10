function DoublyLinkedList() {
  const Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null; // New
  };

  let length = 0;
  let head = null;
  let tail = null; // New

  this.append = function (element) {
    let node = new Node(element);
    let current;

    // Linked List가 비어있는 경우
    if (head === null) head = node;
    // 비어 있지 않은 경우
    else {
      current = head;

      // 마지막 원소를 발견할 때까지 계속 루프 순환한다.
      while (current.next) current = current.next;

      // 마지막 원소를 링크할 수 있게 다음 노드에 핟당한다.
      current.next = node;
    }
  };

  this.insert = function (position, element) {
    // 범위 외의 값인지 체크한다.
    if (position >= 0 && position <= length) {
      let node = new Node(element);
      let current = head;
      let previous = undefined;
      let index = 0;

      // 처음 부분에 원소를 추가할 때
      if (position === 0) {
        if (!head) {
          // 리스트가 비어있는 경우
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node; // 이전 원소에 대한 포인터 세팅만 추가됨
        }
      }
      // 맨 끝에 원소를 추가할 때
      else if (position === length) {
        current = tail;
        node.prev = current;
        tail = node;
      }

      // 임의의 위치에 원소를 삽입하는 경우
      else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
    } else return false;
  };
  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      // 삭제할 원소가 범위 외 값인지 체크
      let current = head; // 삭제할 원소
      let previous = undefined; // 삭제할 원소의 이전 원소
      let index = 0;

      // 첫 번째 원소 삭제
      if (position === 0) head = current.next;
      // General Case
      else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;

      return current.element;
    } else {
      return null;
    }
  };
  this.remove = function (element) {
    if (position > -1 && position < length) {
      let current = head; // current는 삭제할 원소를 의미한다
      let previous = undefined;
      let index = 0;

      // 첫 번째 원소 삭제
      if (position === 0) {
        head = current.next;

        // 원소가 하나뿐이라면 tail을 업데이트한다.

        if (length === 1) tail = null;
        else head.prev = null;
      }

      // 마지막 원소 삭제
      else if (position === length - 1) {
        current = tail;
        tail = current.prev;
        tail.next = null;
      }
      // 임의의 위치의 원소 삭제
      else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
    } else {
      return null;
    }
  };
  this.indexOf = function (element) {
    let current = head;
    let index = -1;

    while (current) {
      if (element === current.element) return index;
      index++;
      current = current.next; // update current
    }
    return -1;
  };
  this.isEmpty = function (element) {};
  this.size = function (element) {};
  this.toArray = function (element) {
    let current = head;
    let array = [];

    while (current) {
      array.push(current.element);
      current = current.next; // current를 다음 값으로 계속 업데이트해주기
    }
    return array;
  };
  this.print = function () {};
}

const linkedList = new DoublyLinkedList();
