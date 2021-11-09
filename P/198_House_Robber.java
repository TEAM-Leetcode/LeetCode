class Solution {
    public int rob(int[] nums) {
        if(nums.length == 1)
            return nums[0];
        
        int beforePrev = nums[0];
        int prev = Math.max(beforePrev, nums[1]);
        
        for(int i = 2; i < nums.length;i ++) {
            int cur = Math.max(nums[i] + beforePrev, prev);
            beforePrev = prev;
            prev = cur;
        }
        return prev;
    }
}

// DP
class Solution {
    public int rob(int[] nums) {
        if(nums.length < 3)
            return nums.length == 1 ? nums[0] : Math.max(nums[0], nums[1]);
        
        int[] dp = new int[nums.length];
        dp[0] = nums[0];
        dp[1] = nums[1];
        dp[2] = nums[2] + dp[0];
        
        for(int i = 3; i < nums.length; i++) {
            dp[i] = Math.max(dp[i - 3], dp[i - 2]) + nums[i];
        }
        
        return Math.max(dp[dp.length - 1], dp[dp.length - 2]);
    }
}

// DP
class Solution {
    public int rob(int[] nums) {
        int[] steal = new int[nums.length];
        steal[0] = nums[0];
        if(nums.length == 1)
            return steal[0];
        
        steal[1] = Math.max(steal[0], nums[1]);
        
        for(int i = 2; i < nums.length;i ++)
            steal[i] = Math.max(nums[i] + steal[i - 2], steal[i - 1]);

        return steal[steal.length - 1];
    }
}