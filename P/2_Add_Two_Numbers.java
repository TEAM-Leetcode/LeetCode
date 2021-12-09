/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
//Time: O(Max(n, m)) Space: O(Max(n, m))
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int carry = 0;
        ListNode sum = new ListNode(-1);
        ListNode cur = sum;
        while(l1 != null || l2 != null) {
            int l1Val = l1 != null ? l1.val : 0;
            int l2Val = l2 != null ? l2.val : 0;
            int val = l1Val + l2Val + carry;
            
            cur.next = new ListNode(val % 10);
            carry = val / 10;
            
            l1 = l1 != null ? l1.next : null;
            l2 = l2 != null ? l2.next : null;
            cur = cur.next;
        }
        
        if(carry == 1)
            cur.next = new ListNode(1);
        
        return sum.next;
    }
}