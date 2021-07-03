//Rotate Groups of Four Cells (Time: O(M) Space: O(1)) M is the number of cells in the matrix
class Solution {
    public void rotate(int[][] matrix) {
        int n = matrix.length;
        for(int bound = 0; bound < matrix.length / 2; bound++) {
            for(int i = 0; i < matrix.length - 1 - (bound * 2); i++) {
                int temp = matrix[0 + bound][0 + bound + i];
                matrix[0 + bound][0 + bound + i] = matrix[n - 1 - bound - i][0 + bound];
                matrix[n - 1 - bound - i][0 + bound] = matrix[n - 1 - bound][n - 1 - bound - i];
                matrix[n - 1 - bound][n - 1 - bound - i] = matrix[0 + bound + i][n - 1 - bound];
                matrix[0 + bound + i][n - 1 - bound] = temp;
            }
        }
    }
}

//Reverse the matrix (Time: O(M) Space: O(1))
class Solution {
    public void rotate(int[][] matrix) {
        int n = matrix.length;

        //transpose the matrix
        for(int i = 0; i < n; i++) {
            for(int j = i; j < n; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        //reflect the matrix
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n / 2; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[i][n - j - 1];
                matrix[i][n - j - 1] = temp;
            }
        }
    }
}