class Solution {
    public int islandPerimeter(int[][] grid) {
        int peri = 0;
        int row = grid.length;
        int col = grid[0].length;
        
        for(int r = 0; r < row; r++) {
            for(int c = 0; c < col; c++) {
                if(grid[r][c] == 1) {
                    peri += around(grid, r - 1, c);
                    peri += around(grid, r, c - 1);
                }
            }
        }
        return peri;
    }
    
    private int around(int[][] grid, int r, int c) {
        if(r < 0 || r >= grid.length || c < 0 || c >= grid[0].length)
            return 2;
        return grid[r][c] == 1 ? 0 : 2;
    }
}
