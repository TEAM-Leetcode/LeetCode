class Solution {
    int[][] image;
    int newColor;
    int oldColor;
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        if(image[sr][sc] == newColor)
            return image;
        
        this.image = image;
        this.newColor = newColor;
        this.oldColor = image[sr][sc];
        
        fill(sr, sc);
        
        return image;
    }
    
    private void fill(int r, int c) {
        if(r < 0 || r >= image.length || c < 0 || c >= image[0].length || image[r][c] != oldColor)
            return;
        
        image[r][c] = newColor;
        
        fill(r - 1, c);
        fill(r + 1, c);
        fill(r, c - 1);
        fill(r, c + 1);
    }
}