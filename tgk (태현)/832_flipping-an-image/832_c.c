/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** flipAndInvertImage(int** image, int imageSize, int* imageColSize, int* returnSize, int** returnColumnSizes){
    *returnSize= imageSize;
    *returnColumnSizes = imageColSize;
    
    int n = *imageColSize;
    
    for (int i = 0 ; i < imageSize ; i++) {
        for (int j = 0 ; j < (n + 1) / 2 ; j++) {
            int temp = image[i][j];
            image[i][j] = !image[i][n - j - 1];
            image[i][n - j - 1] = !temp;
        }
    }
    
    return image;
}