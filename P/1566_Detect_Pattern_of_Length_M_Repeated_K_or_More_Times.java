class Solution {
    public boolean containsPattern(int[] arr, int m, int k) {
        boolean found;
        for(int i = 0; i <= arr.length - m * k; i++) {
            found = true;
            for(int j = 1; found && j < k; j++) {
                for(int l = 0; found && l < m; l++) {
                    if(arr[i + l] != arr[i + l + (m * j)])
                        found = false;
                }
            }
            if(found)
                return found;
        }
        return false;
    }
}