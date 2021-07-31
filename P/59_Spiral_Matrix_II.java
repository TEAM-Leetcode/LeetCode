class Solution {
    public int[][] generateMatrix(int n) {
        int[][] matrix = new int[n][n];
        int r = 0;
        int c = 0;
        
        int dir = 0;
        int[] rowNext = {0, 1, 0, -1};
        int[] colNext = {1, 0, -1, 0};
        for(int i = 1; i <= n * n; i++) {
            matrix[r][c] = i;
            int newRow = r + rowNext[dir];
            int newCol = c + colNext[dir];
            
            if(newRow >= n || newRow < 0 || newCol >= n || newCol < 0 || matrix[newRow][newCol] != 0) {
                dir = (dir + 1) % 4;
                newRow = r + rowNext[dir];
                newCol = c + colNext[dir];
            }
            r = newRow;
            c = newCol;
        }
        return matrix;
    }
}