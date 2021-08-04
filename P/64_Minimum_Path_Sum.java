class Solution {
    public int minPathSum(int[][] grid) {
        for(int i = 0; i < grid.length; i++) {
            if(i + 1 < grid.length) {
                grid[i + 1][0] += grid[i][0];
            }
            for(int j = 0; j < grid[0].length - 1; j++) {
                if(i == 0) {
                    grid[i][j + 1] += grid[i][j];
                } else {
                    grid[i][j + 1] += grid[i - 1][j + 1] < grid[i][j] ? grid[i - 1][j + 1] : grid[i][j];
                }
            }
        }
        return grid[grid.length - 1][grid[0].length - 1];
    }
}

class Solution {
    public int minPathSum(int[][] grid) {
        for(int i = 0; i < grid[0].length - 1; i++)
            grid[0][i + 1] += grid[0][i];
        
        for(int i = 1; i < grid.length; i++) {
            grid[i][0] += grid[i - 1][0];
            for(int j = 0; j < grid[0].length - 1; j++)
                grid[i][j + 1] += grid[i - 1][j + 1] < grid[i][j] ? grid[i - 1][j + 1] : grid[i][j];
        }
        return grid[grid.length - 1][grid[0].length - 1];
    }
}