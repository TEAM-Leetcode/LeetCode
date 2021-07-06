//Use constant variable 'min'
class Solution {
    public int maxProfit(int[] prices) {
        int min = prices[0];
        int max = 0;
        for(int i = 1; i < prices.length; i++) {
            if(prices[i] < min) {
                min = prices[i];
            } else {
                int profit = prices[i] - min;
                max = profit > max ? profit : max;
            }
        }
        return max;
    }
}

//Use stack (Slower than using constant variable)
class Solution {
    public int maxProfit(int[] prices) {
        Stack<Integer> stack = new Stack<>();
        stack.push(prices[0]);

        int max = 0;
        for(int i = 1; i < prices.length; i++) {
            if(prices[i] < stack.peek()) {
                stack.push(prices[i]);
            } else {
                int profit = prices[i] - stack.peek();
                max = profit > max ? profit : max;
            }
        }
        return max;
    }
}

//Nested loop
class Solution {
    public int maxProfit(int[] prices) {
        int maxProfit = 0;
        for(int i = 0; i < prices.length - 1; i++) {
            for(int j = i + 1; j < prices.length; j++) {
                if(prices[i] > prices[j]) {
                    i = j - 1;
                    break;
                } else {
                    int newProfit = prices[j] - prices[i];
                    if(newProfit > maxProfit) {
                        maxProfit = newProfit;
                    }
                    if(j == prices.length - 1)
                        return maxProfit;
                }
            }
        }
        return maxProfit;
    }
}
