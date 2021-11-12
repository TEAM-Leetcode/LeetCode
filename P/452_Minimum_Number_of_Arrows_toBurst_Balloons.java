class Solution {
    public int findMinArrowShots(int[][] points) {
        Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));
        
        int count = 1;
        int max = points[0][1];
        for(int[] point: points) {
            if(max < point[0]) {
                max = point[1];
                count++;
            }
        }
        return count;
    }
}