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
    List<List<Integer>> ans;
    int target;
    
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        if(root == null)
            return new ArrayList();

        this.ans = new ArrayList();
        this.target = targetSum;
        
        findPathSum(root, 0, new ArrayList());
        return ans;
    }
    
    private void findPathSum(TreeNode node, int sum, ArrayList<Integer> arr) {
        sum += node.val;
        arr.add(node.val);
        
        if(node.left == null && node.right == null) {
            if(sum == this.target)
                this.ans.add((List<Integer>)arr.clone());
        } else {
            if(node.left != null)
                findPathSum(node.left, sum, arr);
            if(node.right != null)
                findPathSum(node.right, sum, arr);
        }
        arr.remove(arr.size() - 1);
        return;
    }
}