class Solution {
    public List<List<Integer>> shiftGrid(int[][] grid, int k) {
        int ROW = grid.length;
        int COL = grid[0].length;
        int total = ROW * COL;
        List<List<Integer>> list = new ArrayList<List<Integer>>();
        k %= (total);
        k = ((total) - k) % (total);
        int c = k % COL;
        int r = k / COL;
        for(int i = 0; i < ROW; i++) {
            List<Integer> arr = new ArrayList<>();
            for(int j = 0; j < COL; j++) {
                arr.add(grid[r][c++]);
                if(c >= COL) {
                    c = 0;
                    r++;
                }
                if(r >= ROW) {
                    r = 0;
                }
            }
            list.add(arr);
        }
        return list;
    }
}
