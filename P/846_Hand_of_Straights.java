class Solution {
    public boolean isNStraightHand(int[] hand, int groupSize) {
        Arrays.sort(hand);
        Map<Integer, Integer> map = new HashMap();
        
        for(int n: hand)
            map.put(n, map.getOrDefault(n, 0) + 1);
        
        int group = 0;
        int i = 0;
        while(i <= hand.length - groupSize) {
            boolean grouped = true;
            for(int j = 0; grouped && j < groupSize; j++) {
                if(!map.containsKey(hand[i] + j))
                    grouped = false;
            }
         
            if(grouped) {
                for(int j = 0; j < groupSize; j++) {
                    map.put(hand[i] + j, map.get(hand[i] + j) - 1);
                    if(map.get(hand[i] + j) == 0)
                        map.remove(hand[i] + j);
                }
                group++;
            } else {
                i++;
            }
        }
        return map.isEmpty();
    }
}