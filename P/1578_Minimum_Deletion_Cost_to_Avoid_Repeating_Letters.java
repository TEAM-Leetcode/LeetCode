class Solution {
    public int minCost(String s, int[] cost) {
        int prev = 0;
        int cur = 1;
        
        int min = 0;
        while(cur < s.length()) {
            if(s.charAt(prev) == s.charAt(cur)) {
                min += Math.min(cost[prev], cost[cur]);
                prev = cost[prev] > cost[cur] ? prev : cur;
            } else {
                prev = cur;
            }
            cur++;
        }
        
        return min;
    }
}

class Solution {
    public int minCost(String s, int[] cost) {
        Stack<Character> ch = new Stack();
        Stack<Integer> c = new Stack();
        
        ch.push(s.charAt(0));
        c.push(cost[0]);
        
        int min = 0;
        for(int i = 1; i < s.length(); i++) {
            if(ch.peek() == s.charAt(i)) {
                min += Math.min(c.peek(), cost[i]);
                c.push(Math.max(c.pop(), cost[i]));
            } else {
                ch.push(s.charAt(i));
                c.push(cost[i]);
            }
        }
        
        return min;
    }
}