// https://leetcode.com/problems/merge-two-sorted-lists/

var l1 = [1, 2, 4],
  l2 = [1, 3, 4];
// Output: [1,1,2,3,4,4]

var l3 = [],
  l4 = [];
// Output: []

var l5 = [],
  l6 = [0];
// Output: [0]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoListsA = function (l1, l2) {
  let start = new ListNode(-1, null);
  let prev = start;

  while (l1 && l2) {
    // when both l1 and l2 are not null
    if (l1.val < l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }

    prev = prev.next; // make prev node to the next node
  }

  prev.next = l1 ? l1 : l2;

  return start.next;
};

// recursive
const mergeTwoListsB = function (l1, l2) {
  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoListsB(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoListsB(l1, l2.next);
    return l2;
  }
};
