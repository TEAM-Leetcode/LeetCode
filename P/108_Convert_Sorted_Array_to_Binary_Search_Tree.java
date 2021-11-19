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
//Recursion (Time: O(N) Space: O(N))
class Solution {
    int[] nums;
    public TreeNode sortedArrayToBST(int[] nums) {
        this.nums = nums;
        return toBSTHelp(0, nums.length - 1);
    }
    
    private TreeNode toBSTHelp(int low, int high) {
        if(low > high)
            return null;
        
        int mid = (low + high) / 2;
        TreeNode node = new TreeNode(nums[mid]);
        node.left = toBSTHelp(low, mid - 1);
        node.right = toBSTHelp(mid + 1, high);
        return node;
    }
}

//Recursion (Time: O(N) Space: O(N))
class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        int mid = (nums.length) / 2;
        TreeNode root = new TreeNode(nums[mid]);
        toBSTHelp(nums, root, -1, mid, nums.length);
        return root;
    }
    
    private void toBSTHelp(int[] nums, TreeNode node, int low, int cur, int high) {
        int lowMid = (low + cur) / 2;
        int highMid = (cur + high) / 2;

        if(lowMid > low && lowMid < cur) {
            node.left = new TreeNode(nums[lowMid]);
            toBSTHelp(nums, node.left, low, lowMid, cur);
        } else {
            node.left = null;
        }

        if(highMid > cur && highMid < high) {
            node.right = new TreeNode(nums[highMid]);
            toBSTHelp(nums, node.right, cur, highMid, high);
        } else {
            node.right = null;
        }
    }
}

