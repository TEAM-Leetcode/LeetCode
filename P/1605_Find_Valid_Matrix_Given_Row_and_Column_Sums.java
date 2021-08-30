class Solution {
    public int[][] restoreMatrix(int[] rowSum, int[] colSum) {
        int row = rowSum.length;
        int col = colSum.length;
        
        int[][] ans = new int[row][col];
        for(int r = 0; r < row; ++r) {
            for(int c = 0; c < col; ++c) {
                int n = rowSum[r] < colSum[c] ? rowSum[r] : colSum[c];
    
                ans[r][c] = n;
                rowSum[r] -= n;
                colSum[c] -= n;
            }
        }
        return ans;
    }
}