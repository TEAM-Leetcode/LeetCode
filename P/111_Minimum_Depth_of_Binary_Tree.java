/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int minDepth(TreeNode root) {
        if(root == null)
            return 0;
        
        Queue<TreeNode> queue = new LinkedList();
        queue.add(null);
        int depth = 1;
        
        TreeNode cur = root;
        while(!queue.isEmpty() || cur != null) {
            if(cur == null) {
                queue.add(null);
                depth++;
            } else {
                if(cur.left == null && cur.right == null) {
                    return depth;
                }
                
                if(cur.left != null) {
                    queue.add(cur.left);
                }

                if(cur.right != null) {
                    queue.add(cur.right);
                }
            }
            cur = queue.poll();
        }
        
        return depth;
    }
}