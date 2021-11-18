/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

class Solution {
    public Node connect(Node root) {
        LinkedList<Node> queue = new LinkedList();
        
        queue.add(root);
        queue.add(null);
        while(!queue.isEmpty() && queue.peek() != null) {
            Node curNode = queue.poll();
            curNode.next = queue.peek();
            
            if(curNode.left != null)
                queue.add(curNode.left);
            if(curNode.right != null)
                queue.add(curNode.right);
            
            if(curNode.next == null) {
                queue.poll();
                queue.add(null);
            }
        }
        return root;
    }
}