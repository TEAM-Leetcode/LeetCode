// https://leetcode.com/problems/swap-nodes-in-pairs/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
  let dummy = new ListNode();
  let start = dummy;
  let count = 0;
  let temp = null;

  if (!head || !head.next) {
    return head;
  }

  // [1,2,3,4]
  while (head.next) {
    if (count < 1) {
      temp = head.next; // 2
      head.next = temp.next; // 3
      temp.next = head; // 1
      start.next = temp;
      head = temp.next;
      count++;
    } else {
      start.next = head;
      head = head.next;
      count = 0;
    }

    start = start.next;
  }

  return dummy.next;
};

const swapPairs = function (head) {
  let dummy = new ListNode(-1, null);
  let start = dummy;

  if (!head || !head.next) {
    return head;
  }

  // [1,2,3,4]
  while (head && head.next) {
    // swap
    let temp = head.next; // 2
    head.next = temp.next; // 3
    temp.next = head; // 1
    start.next = temp;

    // jump
    start = head; // -1 -> 1
    head = head.next; // 1 -> 3
  }

  return dummy.next;
};

// recursive
const swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let first = head;
  let second = head.next;

  // swap
  first.next = swapPairs(second.next);
  second.next = first;

  return second;
};
