var swapPairs = function(head) {
  const pointer = head;
  let temp;
  
  if (!head || !head.next) {
      return head;
  } 
  
  while (head && head.next) {
      temp = head.next.val;
      head.next.val = head.val;
      head.val = temp;
      
//      if (head.next.next)
            head = head.next.next;
//      else
//          head = head.next;
  }
  return pointer;
};