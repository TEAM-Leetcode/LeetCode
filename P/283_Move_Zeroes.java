//Two pointers(Time: O(n) Space: O(1))
class Solution {
    public void moveZeroes(int[] nums) {
        int slow = 0;
        
        for(int fast = 0; fast < nums.length; fast++) {
            if(nums[fast] != 0) 
                nums[slow++] = nums[fast];
        }
        while(slow < nums.length)
            nums[slow++] = 0;
    }
}

//Swap (Time: O(n) Space:O(1))
class Solution {
    public void moveZeroes(int[] nums) {
        int slow = 0;
        
        for(int fast = 0; fast < nums.length; fast++) {
            if(nums[fast] != 0)
                swap(nums, slow++, fast);
        }
    }
    
    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        return;
    }
}