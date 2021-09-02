class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int ROW = obstacleGrid.length;
        int COL = obstacleGrid[0].length;
        
        int[][] path = new int[ROW][COL];
        path[0][0] = obstacleGrid[0][0] == 0 ? 1 : 0;
        
        for(int r = 1; r < ROW; r++)
            path[r][0] = obstacleGrid[r][0] == 0 ? path[r - 1][0] : 0;
        
        for(int c = 1; c < COL; c++)
            path[0][c] = obstacleGrid[0][c] == 0 ? path[0][c - 1] : 0;
        
        for(int r = 1; r < ROW; r++) {
            for(int c = 1; c < COL; c++) {
                if(obstacleGrid[r][c] == 1)
                    path[r][c] = 0;
                else
                    path[r][c] = path[r - 1][c] + path[r][c - 1];
            }
        }
        return path[ROW - 1][COL - 1];
    }
}