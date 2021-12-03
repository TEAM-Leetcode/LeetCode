var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast) {
    fast = fast.next;
    if (!fast) break;
    else fast = fast.next;

    slow = slow.next;
  }
  return slow;
};
