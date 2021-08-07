class Solution {
    public int minPairSum(int[] nums) {
        Arrays.sort(nums);
        for(int i = 0; i < nums.length / 2; i++) {
            nums[i] += nums[nums.length - 1 - i];
        }
        return maxNum(nums);
    }
    
    private int maxNum(int[] nums) {
        int max = nums[0];
        for(int i = 1; i < nums.length; i++) {
            if(nums[i] > max)
                max = nums[i];
        }
        return max;
    }
}