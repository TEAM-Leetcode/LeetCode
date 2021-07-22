class Solution {
    public int[][] flipAndInvertImage(int[][] image) {
        int start = 0;
        int end = image[0].length - 1;
        
        for(int i = 0; i < image.length; i++) {
            int left = start;
            int right = end;
            while(left <= right)
                swap(image[i], left++, right--);
        }
        return image;
    }
    
    private void swap(int[] image, int left, int right) {
        int temp = image[left] == 0 ? 1 : 0;
        image[left] = image[right] == 0 ? 1 : 0;
        image[right] = temp;
    }
}

class Solution {
    public int[][] flipAndInvertImage(int[][] image) {
        int start = 0;
        int end = image[0].length - 1;
        
        for(int i = 0; i < image.length; i++) {
            int left = start;
            int right = end;
            while(left <= right) {
                if(image[i][left] == image[i][right]) {
                    image[i][left] = image[i][left] == 0 ? 1 : 0;
                    image[i][right] = image[i][left];
                }
                left++;
                right--;
            }
        }
        return image;
    }
}