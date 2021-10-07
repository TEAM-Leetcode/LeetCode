class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int n = gas.length;
        
        for(int i = 0; i < n; i++) {
            int start = (i + 1) % n;
            int leftGas = gas[i] - cost[i];
            while(start != i && leftGas >= 0) {
                leftGas += gas[start] - cost[start];
                start = (start + 1) % n;
            }
            if(i == start && leftGas >= 0)
                return i;
        }
        return -1;
    }
}