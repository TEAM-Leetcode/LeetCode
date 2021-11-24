//Time: O(N^2) Space: O(1)
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

//Time: O(N^2) Space: O(1)
class Solution {
    public int[][] generateMatrix(int n) {
        int[][] DIR = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        int[][] ans = new int[n][n];
        int direct = 0;
        
        int r = 0;
        int c = 0;
        int size = n * n;
        for(int i = 1; i <= size; i++) {
            ans[r][c] = i;
            int newR = r + DIR[direct][0];
            int newC = c + DIR[direct][1];  
            
            if(newR < 0 || newR >= n || newC < 0 || newC >= n || ans[newR][newC] != 0) {
                direct = (direct + 1) % 4;
                r += DIR[direct][0];
                c += DIR[direct][1];
            } else {
                r = newR;
                c = newC;
            }
        }
        return ans;
    }
}

//by LeetCode (Time: O(N^2) Space: O(1))
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
            int newRow = Math.floorMod(r + rowNext[dir], n);
            int newCol = Math.floorMod(c + colNext[dir], n);
            
            if(matrix[newRow][newCol] != 0)
                dir = (dir + 1) % 4;
            
            r += rowNext[dir];
            c += colNext[dir];
        }
        return matrix;
    }
}