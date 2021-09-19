class Solution {
    public int findPoisonedDuration(int[] timeSeries, int duration) {
        int total = duration;
        
        for(int i = timeSeries.length - 2; i >= 0; i--)
            total += Math.min(duration, timeSeries[i + 1] - timeSeries[i]);
        
        return total;
    }
}