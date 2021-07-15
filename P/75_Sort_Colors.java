//Two Pointer Swapping (Time: O(N) Space: O(1))
class Solution {
    public void sortColors(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        int i = 0;
        while(i <= right) {
            if(nums[i] == 0) {
                swapColors(nums, left++, i++);
            } else if(nums[i] == 2) {
                swapColors(nums, i++, right++);
            } else {
                i++;
            }
        }
    }

    private void swapColors(int[] nums, int left, int right) {
        int temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
    }
}

//Two Pointer Counting (Time: O(N) Space: O(1))
class Solution {
    public void sortColors(int[] nums) {
        int first = 0;
        int second = nums.length / 2;
        
        int[] count = new int[3];
        while(first < nums.length) {
            if(first < nums.length / 2) {
                count[nums[first++]]++;
                count[nums[second++]]++;
            } else if(first == nums.length / 2 && nums.length % 2 == 1) {
                count[nums[second++]]++;
                inputColor(nums, count, first++);
            } else {
                second %= nums.length;
                while(first < nums.length) {
                inputColor(nums, count, first++);
                inputColor(nums, count, second++); 
            }
        }
    }
    
    private void inputColor(int[] nums, int[] count, int index) {
        if(count[0] > index)
            nums[index] = 0;
        else if(count[0] + count[1] > index)
            nums[index] = 1;
        else
            nums[index] = 2;
    }
}