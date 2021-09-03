class Solution {
    public int[] arrayRankTransform(int[] arr) {
        int[] copy = Arrays.copyOf(arr, arr.length);
        int[] rank = new int[arr.length];
        
        Arrays.sort(copy);
        Map<Integer, Integer> sortedIndex = new HashMap();
        int count = 0;
        for(int i = 0; i < copy.length; i++) {
            count += sortedIndex.containsKey(copy[i]) ? 0 : 1;
            sortedIndex.put(copy[i], sortedIndex.getOrDefault(copy[i], count));
        }
        
        for(int i = 0; i < rank.length; i++)
           rank[i] = sortedIndex.get(arr[i]);
  
        return rank;
    }
}