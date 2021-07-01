class Solution {
    public boolean isHappy(int n) {
        Set<Integer> set = new HashSet<>();
        int sum = n;
        
        while(sum > 1 && !set.contains(sum)) {
            set.add(sum);
            int newSum = 0;
            while(sum > 0) {
                int digit = sum % 10;
                sum /= 10;
                newSum += Math.pow(digit, 2);
            }
            sum = newSum;
        }
        return sum == 1;
    }
}