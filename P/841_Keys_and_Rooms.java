class Solution {
    List<List<Integer>> rooms;
    Stack<Integer> keys;
    boolean[] visited;
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        this.rooms = rooms;
        keys = new Stack();
        visited = new boolean[rooms.size()];

        visit(0);
        while(!keys.isEmpty()) 
            visit(keys.pop());
        
        for(int i = 0; i < visited.length; i++) {
            if(!visited[i])
                return false;
        }
        
        return true;
    }
    
    private void visit(int room) {
        visited[room] = true;
        for(Object n: this.rooms.get(room).toArray()) {
            int r = (int) n;
            if(!visited[r])
                keys.push(r);
        }
    }
}