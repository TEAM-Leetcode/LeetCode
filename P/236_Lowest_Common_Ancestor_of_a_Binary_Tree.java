/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
//Recursive DFS (Time: O(N) Space: O(N))
class Solution {
    TreeNode LCA = null;
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        DFSlowestCommonAncestor(root, p, q);
        return this.LCA;
    }

    private TreeNode DFSlowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(root == null || this.LCA != null)
            return null;

        TreeNode leftSubTree = DFSlowestCommonAncestor(root.left, p, q);
        TreeNode rightSubTree = DFSlowestCommonAncestor(root.right, p, q);

        if(leftSubTree != null && rightSubTree != null)
            this.LCA = root;
        else if((root == p || root == q) && (leftSubTree != null || rightSubTree != null))
            this.LCA = root;
        
        return (leftSubTree != null || rightSubTree != null || root == p || root == q) ? root : null;
    }
}

//Recursive DFS (Time: O(N) Space: O(N))
class Solution {
    TreeNode LCA = null;
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        DFSlowestCommonAncestor(root, p, q);
        return this.LCA;
    }

    private int DFSlowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(root == null || this.LCA != null)
            return 0;

        int leftSubTree = DFSlowestCommonAncestor(root.left, p, q);
        int rightSubTree = DFSlowestCommonAncestor(root.right, p, q);
        int curNode = (root == p || root == q) ? 1 : 0;
        
        if(leftSubTree + rightSubTree + curNode == 2)
            this.LCA = root;
        
        return leftSubTree + rightSubTree + curNode > 0 ? 1 : 0;
    }
}

//Iterative DFS by LeetCode (Time: O(N) Space: O(N))
class Solution {
    static int BOTH_PENDING = 2;
    static int LEFT_DONE = 1;
    static int BOTH_DONE = 0;
    
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        Stack<Pair<TreeNode, Integer>> st = new Stack();
        st.push(new Pair<TreeNode, Integer>(root, Solution.BOTH_PENDING));
        
        boolean oneNodeFound = false;
        TreeNode LCA = null;
        TreeNode childNode = null;
        
        while(!st.isEmpty()) {
            Pair<TreeNode, Integer> top = st.peek();
            TreeNode parentNode = top.getKey();
            int parentState = top.getValue();
            
            if(parentState != Solution.BOTH_DONE) {
                if(parentState != Solution.BOTH_PENDING) {
                    if(parentNode == p || parentNode == q) {
                        if(oneNodeFound) {
                            return LCA;
                        } else {
                            oneNodeFound = true;
                            LCA = st.peek().getKey();
                        }
                    }
                    childNode = parentNode.left;
                } else {
                    childNode = parentNode.right;
                }
            
                st.pop();
                st.push(new Pair<TreeNode, Integer>(parentNode, parentState - 1));
                if(childNode != null) {
                    st.push(new Pair<TreeNode, Integer>(childNode, Solution.BOTH_PENDING));
                }
            } else {
                if(LCA == st.pop().getKey() && oneNodeFound) {
                    LCA = st.peek().getKey();
                }
            }
        }
        return null;
    }
}

//Iterative DFS Using Deque by LeetCode (Time: O(N) Space: O(N))
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        Stack<TreeNode> st = new Stack();
        Map<TreeNode, TreeNode> parent = new HashMap();

        parent.put(root, null);
        st.push(root);

        while(!parent.containsKey(p) || !parent.containsKey(q)) {
            TreeNode node = st.pop();
            if(node.left != null) {
                parent.put(node.left, node);
                st.push(node.left);
            }
            if(node.right != null) {
                parent.put(node.right, node);
                st.push(node.right);
            }
        }

        Set<TreeNode> ancestors = new HashSet();

        while(p != null) {
            ancestors.add(p);
            p = parent.get(p);
        }

        while(!ancestors.contains(q))
            q = parent.get(q);
        return q;
    }
}