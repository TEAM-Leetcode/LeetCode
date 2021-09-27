class Solution {
    List<List<Integer>> list;
    int[][] heights;
    int ROW;
    int COL;
    boolean[][] p_visited;
    boolean[][] a_visited;
    
    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        list = new ArrayList();
        this.heights = heights;
        this.ROW = heights.length;
        this.COL = heights[0].length;
        
        for(int r = 0; r < ROW; r++) {
            for(int c = 0; c < COL; c++) {
                this.p_visited = new boolean[ROW][COL];
                this.a_visited = new boolean[ROW][COL];
                if(search(r, c, true) && search(r, c, false)) {
                    int rr = r;
                    int cc = c;
                    list.add(new ArrayList(){{add(rr); add(cc);}});
                }
            }
        }
        
        return list;
    }
    
    private boolean search(int r, int c, boolean pacific) {
        if(pacific && this.p_visited[r][c])
            return false;
        if(!pacific && this.a_visited[r][c])
            return false;
        
        if(pacific && (r == 0 || c == 0))
            return true;
        if(!pacific && (r == ROW - 1 || c == COL - 1))
            return true;
        
        if(pacific)
            p_visited[r][c] = true;
        if(!pacific)
            a_visited[r][c] = true;
        
        boolean ocean = false;
        if(r > 0 && this.heights[r][c] >= this.heights[r - 1][c])
            ocean = ocean || search(r - 1, c, pacific);
        if(!ocean && c > 0 && this.heights[r][c] >= this.heights[r][c - 1])
            ocean = ocean || search(r, c - 1, pacific);
        if(!ocean && r < ROW - 1 && this.heights[r][c] >= this.heights[r + 1][c])
            ocean = ocean || search(r + 1, c, pacific);
        if(!ocean && c < COL - 1 && this.heights[r][c] >= this.heights[r][c + 1])
            ocean = ocean || search(r, c + 1, pacific);
        
        return ocean;        
    }
    
//     private boolean pacificSearch(int r, int c) {
//         if(this.p_visited[r][c])
//             return false;
//         if(r == 0 || c == 0)
//             return true;
        
//         p_visited[r][c] = true;
//         boolean ocean = false;
//         if(this.heights[r][c] >= this.heights[r - 1][c])
//             ocean = ocean || pacificSearch(r - 1, c);
//         if(!ocean && this.heights[r][c] >= this.heights[r][c - 1])
//             ocean = ocean || pacificSearch(r, c - 1);
//         if(!ocean && r < ROW - 1 && this.heights[r][c] >= this.heights[r + 1][c])
//             ocean = ocean || pacificSearch(r + 1, c);
//         if(!ocean && c < COL - 1 && this.heights[r][c] >= this.heights[r][c + 1])
//             ocean = ocean || pacificSearch(r, c + 1);
        
//         return ocean;
//     }
    
//     private boolean atlanticSearch(int r, int c) {
//         if(this.a_visited[r][c])
//             return false;
//         if(r == ROW - 1 || c == COL - 1)
//             return true;
        
//         a_visited[r][c] = true;
//         boolean ocean = false;
//         if(r > 0 && this.heights[r][c] >= this.heights[r - 1][c])
//             ocean = ocean || atlanticSearch(r - 1, c);
//         if(!ocean && c > 0 && this.heights[r][c] >= this.heights[r][c - 1])
//             ocean = ocean || atlanticSearch(r, c - 1);
//         if(!ocean && this.heights[r][c] >= this.heights[r + 1][c])
//             ocean = ocean || atlanticSearch(r + 1, c);
//         if(!ocean && this.heights[r][c] >= this.heights[r][c + 1])
//             ocean = ocean || atlanticSearch(r, c + 1);
        
//         return ocean;
//     }
}