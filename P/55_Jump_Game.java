class Solution {
    public boolean canJump(int[] nums) {
        if(nums.length == 1)
            return true;
        
        int curIndex = 0;
        for(int i = 0; i < nums.length - 1; i++) {   
            int distance = i - curIndex;
            if(nums[i] > nums[curIndex] - distance && nums[curIndex] >= distance)
                curIndex = i;
            
            if(nums[curIndex] + curIndex >= nums.length - 1)
                return true;
        }
        return false;
    }
}