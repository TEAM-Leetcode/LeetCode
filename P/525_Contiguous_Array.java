//Array
class Solution {
    public int findMaxLength(int[] nums) {
        int N = nums.length;
        
        int[] indices = new int[N * 2 + 1];
        for(int i = 0; i < indices.length; i++)
            indices[i] = Integer.MIN_VALUE;
        
        int count = N;
        indices[count] = -1;
        int max = 0;
        for(int i = 0; i < N; i++) {
            count += nums[i] == 1 ? 1 : -1;
            if(indices[count] != Integer.MIN_VALUE)
                max = Math.max(max, i - indices[count]);
            else
                indices[count] = i;
        }
        return max;
    }
}

//Hash Map
class Solution {
    public int findMaxLength(int[] nums) {
        Map<Integer, Integer> map = new HashMap();
        
        int count = 0;
        int max = 0;
        map.put(0, -1);
        for(int i = 0; i < nums.length; i++) {
            count += nums[i] == 1 ? 1 : -1;
            if(map.containsKey(count)) {
                if(i - map.get(count) > max)
                    max = i - map.get(count);
            } else {
                map.put(count, i);
            }
        }
        return max;
    }
}