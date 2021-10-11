class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int[] dp = new int[cost.length + 1];
        int min = 0;
        
        for(int i = 2; i <= cost.length; i++)
            dp[i] = Math.min(cost[i - 2] + dp[i - 2], cost[i - 1] + dp[i - 1]);

        return dp[dp.length - 1];
    }
}