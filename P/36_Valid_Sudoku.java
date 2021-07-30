//Using Hash Table (Time: O(1) Space: O(1))
class Solution {
    public boolean isValidSudoku(char[][] board) {
        HashSet<Integer>[] rows = new HashSet[9];
        HashSet<Integer>[] columns = new HashSet[9];
        HashSet<Integer>[] boxes = new HashSet[9];
        
        for(int i = 0; i < 9; i++) {
            rows[i] = new HashSet<Integer>();
            columns[i] = new HashSet<Integer>();
            boxes[i] = new HashSet<Integer>();
        }
        
        for(int i = 0; i < 9; i++) {
            for(int j = 0; j < 9; j++) {
                char num = board[i][j];
                if(num != '.') {
                    int n = (int)num;
                    int box_index = (i / 3) * 3 + (j / 3);
                    
                    if(rows[i].contains(n) || columns[j].contains(n) || boxes[box_index].contains(n))
                        return false;
                    
                    rows[i].add(n);
                    columns[j].add(n);
                    boxes[box_index].add(n);
                }
            }
        }
        return true;
    }
}

//Using boolean 3D array (Time: O(1) Space: O(1))
class Solution {
    public boolean isValidSudoku(char[][] board) {
        int currRow = 0;
        int currCol = 0;
        boolean[][][] check = new boolean[3][3][9];
        
        while(currRow < board.length) {
            if(Character.compare(board[currRow][currCol], '.') != 0) {
                // Checking 3 * 3 duplicate
                int boxRow = currRow / 3;
                int boxCol = currCol / 3;
                int num = Integer.parseInt(String.valueOf(board[currRow][currCol])) - 1;
                if(check[boxRow][boxCol][num] != true)
                    check[boxRow][boxCol][num] = true;
                else
                    return false;
                
                // Checking row duplicate
                for(int row = currRow + 1; row < board.length; row++) {
                    if(Character.compare(board[currRow][currCol], board[row][currCol]) == 0)
                        return false;
                }
                
                // Checking column duplicate
                for(int col = currCol + 1; col < board[0].length; col++) {
                    if(Character.compare(board[currRow][currCol], board[currRow][col]) == 0)
                        return false;
                }
            }
            
            currCol++;
            if(currCol >= 9) {
                currCol = 0;
                currRow++;
            }
        }
        return true;
    }
}