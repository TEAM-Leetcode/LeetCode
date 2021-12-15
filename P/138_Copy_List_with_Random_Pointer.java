/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/
//Iteration with HashMap (Time: O(N) Space: O(N))
class Solution {   
    public Node copyRandomList(Node head) {
        Map<Node, Node> visited = new HashMap<>();
 
        if(head == null)
            return null;
        
        Node newHead = new Node(head.val);
        visited.put(head, newHead);

        Node cur = head;
        Node newCur = newHead;
        while(cur != null) { 
            if(cur.next != null) {
                if(!visited.containsKey(cur.next)) {
                    Node next = new Node(cur.next.val);
                    visited.put(cur.next, next);
                    newCur.next = next;
                } else {
                    newCur.next = visited.get(cur.next);
                }
            }
                
            if(cur.random != null) {
                if(!visited.containsKey(cur.random)) {
                    Node random = new Node(cur.random.val);
                    visited.put(cur.random, random);
                    newCur.random = random;
                } else {
                    newCur.random = visited.get(cur.random);
                }
            }
            cur = cur.next;
            newCur = newCur.next;
        }
        return newHead;
    }
}

//Iteration with HashMap (Time: O(N) Space: O(N))
class Solution {
    public Node copyRandomList(Node head) {
        Map<Node, Node> map = new HashMap();
        
        if(head != null)
            map.put(head, new Node(head.val));
        Node cur = head;
        
        while(cur != null) {
            if(!map.containsKey(cur.next)) {
                if(cur.next != null)
                    map.put(cur.next, new Node(cur.next.val));
                else
                    map.put(cur.next, null);
            }
            map.get(cur).next = map.get(cur.next);
            
            if(!map.containsKey(cur.random)) {
                if(cur.random != null)
                    map.put(cur.random, new Node(cur.random.val));
                else
                    map.put(cur.random, null);
            }
            map.get(cur).random = map.get(cur.random);
            
            cur = cur.next;
        }
        
        return map.get(head);
    }
}

//Recursion with HashMap (Time: O(N) Space: O(N))
class Solution {
    Map<Node, Node> visited = new HashMap<>();
    
    public Node copyRandomList(Node head) {
        if(head == null)
            return null;
        if(visited.containsKey(head))
            return visited.get(head);
        
        Node node = new Node(head.val);
        visited.put(head, node);
        node.next = copyRandomList(head.next);
        node.random = copyRandomList(head.random);
        
        return node;
    }
}

//Brutal Force (Time: O(N^2) Space: O(1))
class Solution {
    public Node copyRandomList(Node head) {
        if(head == null)
            return null;
        
        Node newHead = new Node(-1);
        
        Node cur = head;
        Node newCur = newHead;
        while(cur != null) {
            newCur.val = cur.val;
            cur = cur.next;
            if(cur != null) {
                Node next = new Node(-1);
                newCur.next = next;
                newCur = newCur.next;
            }
        }
        cur = head;
        newCur = newHead;
        while(cur != null) {
            Node random = cur.random;
            if(random == null) {
                newCur.random = null;
                cur = cur.next;
                newCur = newCur.next;
                continue;
            }
            Node search = head;
            Node newRandom = newHead;
            while(search != null) {
                if(search == random) {
                    newCur.random = newRandom;
                    break;
                }
                search = search.next;
                newRandom = newRandom.next;
            }
            cur = cur.next;
            newCur = newCur.next;
        }
        return newHead;
    }
}

//Weaved Linked List by LeetCode (Time: O(N) Space: (1))
public class Solution {
  public Node copyRandomList(Node head) {

    if (head == null)
      return null;

    Node cur = head;
    while (cur != null) {
      Node newNode = new Node(cur.val);

      newNode.next = cur.next;
      cur.next = newNode;
      cur = newNode.next;
    }

    cur = head;

    while (cur != null) {
      cur.next.random = (cur.random != null) ? cur.random.next : null;
      cur = cur.next.next;
    }

    Node oldList = head;
    Node newList = head.next;
    Node oldHead = head.next;
    while (oldList != null) {
      oldList.next = oldList.next.next;
      newList.next = (newList.next != null) ? newList.next.next : null;
      oldList = oldList.next;
      newList = newList.next;
    }
    return oldHead;
  }
}
