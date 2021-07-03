class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> list = new ArrayList<List<Integer>>();
        
        int i = 0;
        while(i < nums.length) {
            List<Integer> arr = new ArrayList<>();
            for(int k = 0; k < i; k++) {
                arr.add(nums[k]);
            }
            
            int j = i;
            while(j < nums.length) {
                arr.add(nums[j++]);
                list.add(arr);
                arr.remove(arr.size() - 1);
            }
            i++;
        }
        return list;
    }
}