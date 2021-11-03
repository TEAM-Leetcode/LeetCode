//Backtracking (Time: O(N * 3^L) Space: O(L)) where L is length of input word
class Solution {
    char[][] board;
    int row;
    int col;
    String target;
    int[][] direction = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    
    public boolean exist(char[][] board, String word) {
        this.board = board;
        this.row = board.length;
        this.col = board[0].length;
        this.target = word;     

        for(int r = 0; r < this.row; r++) {
            for(int c = 0; c < this.col; c++) {
                if(backtrack(0, r, c))
                    return true;
            }
        }
        return false;
    }
    
    private boolean backtrack(int index, int r, int c) {
        if(r < 0 || r >= this.row || c < 0 || c >= this.col || this.board[r][c] != this.target.charAt(index))
            return false;
        
        if(index == this.target.length() - 1)
            return true;
        
        this.board[r][c] = '#';
        
        for(int d = 0; d < 4; d++) {
            if(backtrack(index + 1, r + this.direction[d][0], c + this.direction[d][1]))
                return true;
        }

        this.board[r][c] = this.target.charAt(index);
        return false;
    }
}