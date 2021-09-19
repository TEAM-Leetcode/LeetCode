class Solution {
    public int[] restoreArray(int[][] adjacentPairs) {
        Map<Integer, List<Integer>> map = new HashMap();
        Set<Integer> set = new HashSet();
        
        for(int i = 0; i < adjacentPairs.length; i++) {
            int val1 = adjacentPairs[i][0];
            int val2 = adjacentPairs[i][1];
            
            if(!map.containsKey(val1))
                map.put(val1, new ArrayList());
            map.get(val1).add(val2);
            
            if(!map.containsKey(val2))
                map.put(val2, new ArrayList());
            map.get(val2).add(val1);
            
            if(set.contains(val1))
                set.remove(val1);
            else
                set.add(val1);
            
            if(set.contains(val2))
                set.remove(val2);
            else
                set.add(val2);
        }
        
        Object[] head = set.toArray();
        
        int[] ans = new int[adjacentPairs.length + 1];
        
        ans[0] = (int)head[0];
        int next = map.get(head[0]).get(0);
        for(int i = 1; i < ans.length - 1; i++) {
            ans[i] = next;
            next = map.get(ans[i]).get(0) != ans[i - 1] ? map.get(ans[i]).get(0) : map.get(ans[i]).get(1);
        }
        
        ans[ans.length - 1] = (int)head[1];
        
        return ans;
    }
}