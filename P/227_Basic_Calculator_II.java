class Solution {
    public int calculate(String s) {
        Deque<Integer> num = new LinkedList();
        Deque<String> sym = new LinkedList();
        s = s.trim();
        String[] ops = s.split("\\s*[0-9]+\\s*");
        String[] notops = s.split("\\s*[^0-9]+\\s*");
        
        num.push(Integer.valueOf(notops[0]));
        for(int i = 1; i < ops.length; i++) {
            if(ops[i].equals("+") || ops[i].equals("-")) {
                num.addLast(Integer.valueOf(notops[i]));
                sym.addLast(ops[i]);
            } else {
                int v1 = num.removeLast();
                int v2 = Integer.valueOf(notops[i]);
                if(ops[i].equals("*"))
                    num.addLast(v1 * v2);
                else
                    num.addLast(v1 / v2);
            }
        }
        
        while(!sym.isEmpty()) {
            int v1 = num.removeFirst();
            int v2 = num.removeFirst();
            if(sym.pop().equals("+"))
                num.addFirst(v1 + v2);
            else
                num.addFirst(v1 - v2);
        }
        return num.pop();
    }
}