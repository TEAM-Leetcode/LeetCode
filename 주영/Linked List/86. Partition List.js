function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

ListNode.prototype.arrayToList = function (nums) {
  if (nums.length === 0) {
    throw new Error("Empty array not allowed");
  }
  this.val = nums[0];
  let ptr = this;

  for (const num of nums.slice(1)) {
    ptr.next = new ListNode(num);
    ptr = ptr.next;
  }
};

ListNode.prototype.print = function () {
  let ptr = this;
  let ret = "";

  while (ptr !== null) {
    ret += ptr.val + " -> ";
    ptr = ptr.next;
  }

  ret += "null";

  console.log(ret);
};

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

// x가 3일 때,
// 1 -> 4 -> 2 -> 3 -> 5 로 되어있는 LinkedList를
// 1 -> 2 -> 2 -> 4 -> 3 -> 5 로 바꿔야 한다. (3보다 작은 node를 앞으로 빼주기)
var partition = function (head, x) {
  let ret = new ListNode(0, head); // LinkedList의 가장 첫 번째 노드를 따로 빼주고
  let ptr = ret; // 이를 pointer이라는 변수에 담아준다.

  let dummy = new ListNode(0, null); // 더미 노드 생성 (여기선 0이라고 하겠다.)
  let dummyEnd = dummy; // dummyEnd 변수에 dummy를 담아준다.

  while (ptr.next !== null) {
    // ptr.next가 null이 될 때 까지(그러니까 list 다 loop하고 loop 탈출)
    if (ptr.next.val >= x) {
      // 3보다 크거나 같을 때
      dummyEnd.next = ptr.next; // dummy: 0 -> 4
      dummyEnd = dummyEnd.next; // 4를 dummyEnd로 update

      ptr.next = ptr.next.next; // original List: 1 -> 2 (1 -> 4 -> 2에서 바뀌었다.)
    } else {
      ptr = ptr.next; // 그대로 다음 노드에 연결
    }
  }

  // loop이 다 끝나면 original List는 1 -> 2 -> 2 -> null 의 형태로 바뀐다.
  // dummy List: 0 -> 4 -> 3 -> 5 -> original list  => 이걸 original list 뒤에 붙여줘야한다.
  dummyEnd.next = null; // 따라서 dummyEnd(5).next = null 로 바꿔주고
  ptr.next = dummy.next; // 현재 포인터 2의 next를 현재 더미(0)의 next인 4로 바꿔준다.

  // 결과: 1 -> 2 -> 2 -> 4 -> 3 -> 5 -> null
  return ret.next;
};

let head = new ListNode(0, null);

head.arrayToList([1, 4, 3, 2, 5, 2]);

head.print();

result = partition(head, 3);

result.print();
