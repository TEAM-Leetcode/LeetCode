var addTwoNumbers = function (arr1, arr2) {
  let dummy = new ListNode(0);
  let head = dummy;

  let sum = 0;
  let carry = 0;

  while (arr1 || arr2 || sum > 0) {
    if (!arr1) {
      sum += arr1.val;
      arr1 = arr1.next;
    }

    if (!arr2) {
      sum += arr2.val;
      arr2 = arr2.next;
    }

    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    sum += carry;
    carry = 0;

    head.next = new ListNode(sum);
    head = head.next;
  }

  return dummy.next;
};
