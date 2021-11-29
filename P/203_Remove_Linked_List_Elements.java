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
//Use Sentinel node (Time: O(n) Space: O(1))
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        if(head == null)
            return head;
        
        ListNode sentinel = new ListNode(-1, head);
        ListNode cur = sentinel;
        while(cur.next != null) {
            if(cur.next.val == val)
                cur.next = cur.next.next;
            else
                cur = cur.next;
        }
        return sentinel.next;
    }
}

//Without Sentinel node (Time: O(n) Space: O(1))
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        if(head == null)
            return head;
        
        ListNode curNode = head;
        while(curNode.next != null) {
            if(curNode.next.val == val)
                curNode.next = curNode.next.next;
            else
                curNode = curNode.next;
        }
        
        while(head != null && head.val == val)
            head = head.next;
        return head;
    }
}

//Two Pointer Without Sentinel node (Time: O(n) Space: O(1))
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        ListNode curNode = head;
        ListNode prevNode = head;
        
        while(curNode != null) {
            if(curNode.val == val) {
                if(curNode == head) {
                    head = curNode.next;
                } else {
                    prevNode.next = curNode.next;
                }
            } else {
                prevNode = curNode;
            }
            curNode = curNode.next;
        }
        return head;
    }
}