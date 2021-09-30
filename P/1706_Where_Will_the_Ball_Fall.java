class Solution {
    int[][] grid;
    public int[] findBall(int[][] grid) {
        this.grid = grid;
        int[] ans = new int[grid[0].length];
        
        for(int i = 0; i < grid[0].length; i++)
            ans[i] = roll(i);

        return ans;
    }
    
    private int roll(int n) {
        int cur = n;
        int prev;
        for(int j = 0; j < this.grid.length; j++) {
            prev = this.grid[j][cur];
            cur += prev;
            
            if(cur < 0 || cur >= grid[0].length)
                return -1;
            
            if(prev == 1 && this.grid[j][cur] == -1)
                return -1;
            if(prev == -1 && this.grid[j][cur] == 1)
                return -1;
        }
        return cur;
    }
}