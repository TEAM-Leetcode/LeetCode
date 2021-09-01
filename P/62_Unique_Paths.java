//Using Dynamic Programming (Time: O(NM) Space: O(NM))
class Solution {
    public int uniquePaths(int m, int n) {
        int[][] pathNum = new int[m][n];
        
        for(int i = 0; i < m; i++)
            pathNum[i][0] = 1;
        
        for(int i = 0; i < n; i++)
            pathNum[0][i] = 1;
        
        for(int i = 1; i < m; i++) {
            for(int j = 1; j < n; j++) {
                pathNum[i][j] = pathNum[i - 1][j] + pathNum[i][j - 1];
            }
        }
        return pathNum[m - 1][n - 1];
    }
}

//Using Mathmatics (Time: O(NM) Space: O(1))
class Solution {
    public int uniquePaths(int m, int n) {
        int big = Math.max(m - 1, n - 1);
        int small = Math.min(m - 1, n - 1);
        int sum = big + small;
        
        long ans = 1;
        for(int i = sum; i > big; i--)
            ans *= i;
        
        for(int i = small; i > 1; i--)
            ans /= i;
        
        return (int) ans;
    }
}