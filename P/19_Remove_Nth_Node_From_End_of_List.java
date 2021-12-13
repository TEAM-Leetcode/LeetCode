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
//1 Iteration (Time: O(n) Space: O(1))
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode sentinelNode = new ListNode(0);
        sentinelNode.next = head;
        ListNode fast = sentinelNode;
        ListNode slow = sentinelNode;

        for(int i = 0; i < n + 1; i++)
            fast = fast.next;

        while(fast != null) {
            fast = fast.next;
            slow = slow.next;
        }

        slow.next = slow.next.next;
        return sentinelNode.next;
    }
}

//2 Iterations (Time: O(n) Space: O(1))
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        int size = 0;
        ListNode curNode = head;
        while(curNode != null) {
            curNode = curNode.next;
            size++;
        }
        
        if(n == size) {
            head = head.next;
            return head;
        }
        
        curNode = head;
        for(int i = 0; i < size - n - 1; i++) {
            curNode = curNode.next;
        }
        curNode.next = curNode.next.next;
        return head;
    }
}

//2 Iterations (Time: O(n) Space: O(1))
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode sentinelNode = new ListNode(0);
        sentinelNode.next = head;
        int size  = 0;
        ListNode curNode = head;
        while (curNode != null) {
            curNode = curNode.next;
            size++;
        }
        
        curNode = sentinelNode;
        for(size -= n; size > 0; size--)
            curNode = curNode.next;

        curNode.next = curNode.next.next;
        return sentinelNode.next;
    }
}