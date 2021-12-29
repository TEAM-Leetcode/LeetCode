class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int n = nums.length;
        Integer closest = null;
        
        for(int i = 0; i < n - 2; i++) {
            if(i == 0 || nums[i] != nums[i - 1]) {
                int threeSum = nums[i] + twoSum(nums, target - nums[i], i + 1);
                if(threeSum == target)
                    return threeSum;
                
                closest = closest == null || Math.abs(threeSum - target) < Math.abs(closest - target) ? threeSum : closest;
            }
        }
        return closest;
    }
    
    private int twoSum(int[] nums, int target, int idx) {
        int left = idx;
        int right = nums.length - 1;
        Integer closest = null;
        
        while(left < right) {
            int twoSum = nums[left] + nums[right];
            if(twoSum == target) {
                return target;
            } else if(twoSum < target) {
                left++;
            } else {
                right--;
            }
            closest = closest == null || Math.abs(twoSum - target) < Math.abs(closest - target) ? twoSum : closest;
        }
        return closest;
    }
}