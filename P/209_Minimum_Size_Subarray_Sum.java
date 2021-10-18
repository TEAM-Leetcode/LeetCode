//Two Pointer (Time: O(N) Space: O(1))
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int minLength = 100001;
        int sum = 0;
        
        int i = 0, j = 0;
        while(i <= j && (sum >= target || j < nums.length)) {
            if(sum >= target) {
                sum -= nums[i++];
                minLength = Math.min(minLength, j - i + 1);
                if(minLength == 1)
                    return 1;
            } else {
                sum += nums[j++];
            }
        }
        return minLength == 100001 ? 0 : Math.min(minLength, j - i + 1);
    }
}

//Two Pointer (Time: O(N) Space: O(1))
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int minLength = 100001;
        int i = 0, sum = 0;
        for(int j = 0; j < nums.length; j++) {
            sum += nums[j];
            while(sum >= target) {
                minLength = Math.min(minLength, j - i + 1);
                sum -= nums[i++];
            }
            if(minLength == 1)
                return 1;
        }
        return minLength == 100001 ? 0 : minLength;
    }
}