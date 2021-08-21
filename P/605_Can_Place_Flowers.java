class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        for(int i = 0; i < flowerbed.length; ++i) {
            if(flowerbed[i] == 1) {
                i++;
            } else {
                int left =  i - 1 >= 0 ? flowerbed[i - 1] : 0;
                int right = i + 1 < flowerbed.length ? flowerbed[i + 1] : 0;
                if(left == 0 && right == 0) {
                    n--;
                    i++;
                }
            }
        }
        return n <= 0;
    }
}