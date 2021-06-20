class Solution {
    public int[] relativeSortArray(int[] arr1, int[] arr2) {
        int[] count = new int[1001];
        for(int i = 0; i < arr1.length; i++)
            count[arr1[i]]++;
        
        int i = 0;
        for(int j = 0; j < arr2.length; j++) {
            while(count[arr2[j]] > 0) {
                arr1[i++] = arr2[j];
                count[arr2[j]]--;
            }
        }
        
        for(int j = 0; j < 1001; j++) {
            while(count[j] > 0) {
                arr1[i++] = j;
                count[j]--;
            }
        }
        return arr1;
    }
}