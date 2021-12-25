class Solution {
    public int shortestPathBinaryMatrix(int[][] grid) {
        int ROW = grid.length;
        int COL = grid[0].length;
        
        if(grid[0][0] == 1 || grid[ROW - 1][COL - 1] == 1)
            return -1;
        
        Queue<int[]> queue = new LinkedList();
        queue.add(new int[]{0, 0});
        queue.add(null);
        grid[0][0] = -1;

        int count = 1;
        
        int[][] DIR = {{0, 1}, {1, 1}, {1, 0}, {1, -1}, {0, -1}, {-1, -1}, {-1, 0}, {-1, 1}};
        
        while(!queue.isEmpty()) {
            if(queue.peek() == null) {
                queue.add(queue.poll());
                count++;
                if(queue.size() == 1)
                    return -1;
            } else {
                int[] cur = queue.poll();
                int r = cur[0];
                int c = cur[1];

                if(r == ROW - 1 && c == COL - 1) {
                    return count;
                }
                for(int i = 0; i < DIR.length; i++) {
                    int nextR = r + DIR[i][0];
                    int nextC = c + DIR[i][1];
                    if(nextR < 0 || nextR >= ROW || nextC < 0 || nextC >= COL) {
                        continue;
                    }

                    if(grid[nextR][nextC] == 0) {
                        queue.add(new int[]{nextR, nextC});
                        grid[nextR][nextC] = -1;
                    }

                }
            }
        }
        return count;
    }
}