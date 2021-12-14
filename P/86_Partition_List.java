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
class Solution {
    public ListNode partition(ListNode head, int x) {
        ListNode lessThan = new ListNode(-1);
        ListNode greaterThan = new ListNode(-1);
        
        ListNode lessCur = lessThan;
        ListNode greaterCur = greaterThan;
        
        ListNode cur = head;
        while(cur != null) {
            if(cur.val < x) {
                lessCur.next = cur;
                lessCur = lessCur.next;
            } else {
                greaterCur.next = cur;
                greaterCur = greaterCur.next;
            }
            cur = cur.next;
        }
        
        lessCur.next = greaterThan.next;
        greaterCur.next = null;
        return lessThan.next;
    }
}