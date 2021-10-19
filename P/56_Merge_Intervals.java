//Array Sort (Time: O(NlogN) Space: O(N))
class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        
        LinkedList<int[]> list = new LinkedList();
        for(int[] edge: intervals) {
            if(list.isEmpty() || list.getLast()[1] < edge[0])
                list.add(edge);
            else
                list.getLast()[1] = Math.max(list.getLast()[1], edge[1]);
        }
        
        return list.toArray(new int[list.size()][]);
    }
}

//Tree Map (Time: O(NlogN) Space: O(N))
class Solution {
    public int[][] merge(int[][] intervals) {
        TreeMap<Integer, Integer> map = new TreeMap();
        
        for(int i = 0; i < intervals.length; i++)
            map.put(intervals[i][0], Math.max(map.getOrDefault(intervals[i][0], -1), intervals[i][1]));
        
        List<int[]> list = new ArrayList();
        while(!map.isEmpty()) {
            int start = map.firstKey();
            int end = map.get(start);
            map.remove(start);
            
            while(!map.isEmpty() && end >= map.firstKey()) {
                end = Math.max(end, map.get(map.firstKey()));
                map.remove(map.firstKey());
            }
            
            list.add(new int[] {start, end});
        }

        return list.toArray(new int[list.size()][]);
    }
}