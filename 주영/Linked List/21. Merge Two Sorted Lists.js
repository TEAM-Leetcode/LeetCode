function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (l1, l2) {
  let merge = new ListNode();
  let head = merge;

  // head = 1
  // 1 ->

  while (l1 && l2) {
    // Select the smallest value from either linked list,
    // then increment that list forward.
    if (l1.val < l2.val) {
      merge.next = l1; // l1 자체가 Linked List이기 때문에 처음 node는 head인 1이된다.
      l1 = l1.next;
    } else {
      merge.next = l2; // ?
      l2 = l2.next;
    }
    merge = merge.next;
  }

  // It's possible that one linked list is shorter than the other so we just
  // add on the remainder of the last linked list. It's already sorted :)
  if (!l1) merge.next = l2;
  else if (!l2) merge.next = l1;

  // return .next because this first element in the linkedlist is empty
  return head.next;
};

// Recurisve Solution
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 ? l1 : l2;

  // 서로 길이가 다를 경우는?
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

// let l1 = [1, 2, 4];
// let l2 = [1, 3, 4];
// Output: [1,1,2,3,4,4]
