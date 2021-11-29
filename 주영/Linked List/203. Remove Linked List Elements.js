/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return null;

  // head를 포인팅하기 위함
  let dummy = new ListNode();
  dummy.next = head;
  let curNode = head;
  let prev = dummy;

  while (curNode) {
    if (curNode.val === val) prev.next = curNode.next;
    else prev = prev.next;

    curNode = curNode.next;
  }
  return dummy.next;
};

let head = [1, 2, 6, 3, 4, 5, 6];
let val = 6;

removeElements(head, val);
