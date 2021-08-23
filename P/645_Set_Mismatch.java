//Using Array
class Solution {
    public int[] findErrorNums(int[] nums) {
        int[] count = new int[nums.length + 1];

        for(int i = 0; i < nums.length; ++i)
            count[nums[i]]++;

        int duplicate = -1;
        int missing = -1;
        for(int i = 1; i < count.length; ++i) {
            if(count[i] == 0)
                missing = i;
            else if(count[i] > 1)
                duplicate = i;
        }
        return new int[]{duplicate, missing};
    }
}

//Using HashSet
class Solution {
    public int[] findErrorNums(int[] nums) {
        Set<Integer> count = new HashSet();
        
        int duplicate = 0;
        for(int i = 0; i < nums.length; ++i) {
            if(count.contains(nums[i]))
                duplicate = nums[i];
            count.add(nums[i]);
        }
        
        for(int i = 1; i <= nums.length; ++i) {
            if(!count.contains(i))
                return new int[]{duplicate, i};
        }
        
        return new int[]{-1, -1};
    }
}
