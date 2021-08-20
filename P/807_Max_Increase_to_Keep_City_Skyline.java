class Solution {
    public int maxIncreaseKeepingSkyline(int[][] grid) {
        int[] rowHigh = new int[grid.length];
        int[] colHigh = new int[grid[0].length];
        
        for(int i = 0; i < grid.length; i++) {
            for(int j = 0; j < grid[0].length; j++) {
                if(rowHigh[i] < grid[i][j])
                    rowHigh[i] = grid[i][j];
                if(colHigh[j] < grid[i][j])
                    colHigh[j] = grid[i][j];
            }
        }
        
        int sum = 0;
        for(int i = 0; i < grid.length; i++) {
            for(int j = 0; j < grid[0].length; j++) {
                int newHeight = rowHigh[i] > colHigh[j] ? colHigh[j] : rowHigh[i];
                sum += newHeight - grid[i][j];
            }
        }
        return sum;
    }
}