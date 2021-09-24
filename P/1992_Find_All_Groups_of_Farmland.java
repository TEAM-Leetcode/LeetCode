class Solution {
    int[][] land;
    List<List<Integer>> list;
    
    public int[][] findFarmland(int[][] land) {
        this.land = land;
        list = new ArrayList();
        
        for(int r = 0; r < land.length; r++) {
            for(int c = 0; c < land[0].length; c++) {
                if(land[r][c] == 1) {
                    int row = r;
                    int col = c;
                    list.add(new ArrayList<Integer>() {{add(row); add(col); add(-1); add(-1);}});
                    group(r, c, list.get(list.size() - 1));
                }
            }
        }
        
        int[][] ans = new int[list.size()][4];
        for(int i = 0; i < list.size(); i++) {
            for(int j = 0; j < 4; j++)
                ans[i][j] = list.get(i).get(j);
        }
        
        return ans;
    }
    
    private void group(int r, int c, List<Integer> arr) {
        if(r >= land.length || c >= land[0].length || land[r][c] == 0)
            return;
        
        land[r][c] = 0;
        
        arr.set(2, Math.max(arr.get(2), r));
        arr.set(3, Math.max(arr.get(3), c));
        
        group(r + 1, c, arr);
        group(r, c + 1, arr);
    }
}