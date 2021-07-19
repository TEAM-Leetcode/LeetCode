class Solution {
    public int findJudge(int n, int[][] trust) {
        int[] judge = new int[n + 1];
        for(int i = 0; i < trust.length; i++) {
            judge[trust[i][0]]--;
            judge[trust[i][1]]++;
        }
        
        for(int i = 1; i < judge.length; i++) {
            if(judge[i] == n - 1)
                return i;
        }
        return -1;
    }
}