class Solution {
    List<List<Integer>> ans;
    int[] candidates;
    int target;
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        ans = new ArrayList();
        this.candidates = candidates;
        this.target = target;
        
        findSum(0, 0, new ArrayList());
        return ans;
    }
    
    private void findSum(int sum, int min, List<Integer> list) {
        if(sum >= target) {
            if(sum == target)
                ans.add(new ArrayList<Integer>(list));
            return;
        }
        
        for(int i = min; i < this.candidates.length; i++) {
            list.add(this.candidates[i]);
            findSum(sum + this.candidates[i], i, list);
            list.remove(list.size() - 1);
        }
        return;
    }
}