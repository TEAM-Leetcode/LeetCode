//Stack
class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        Stack<Integer> temp = new Stack<>();
        Stack<Integer> index = new Stack<>();
        
        int n = temperatures.length;
        int[] answer = new int[n];
        for(int i = 0; i < n; i++) {
            while(!temp.isEmpty() && temp.peek() < temperatures[i]) {
                answer[index.peek()] = i - index.pop();
                temp.pop();
            }
            
            if(i < n - 1 && temperatures[i] < temperatures[i + 1]) {
                answer[i] = 1;
            } else {
                temp.push(temperatures[i]);
                index.push(i);
            }
        }
        return answer;
    }
}

//Stack
class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        Stack<Integer> temp = new Stack<>();
        Stack<Integer> index = new Stack<>();
        
        int n = temperatures.length;
        int[] answer = new int[n];
        for(int i = 0; i < n - 1; i++) {
            temp.push(temperatures[i]);
            index.push(i);
            
            while(!temp.isEmpty() && temp.peek() < temperatures[i + 1]) {
                answer[index.peek()] = i + 1 - index.pop();
                temp.pop();
            }
        }
        return answer;
    }
}

//Brutal force(Time: O(n^2) Space: O(n))
class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int[] answer = new int[temperatures.length];
        
        for(int i = 0; i < temperatures.length - 1; i++) {
            int j = i + 1;
            while(j < temperatures.length && temperatures[j] <= temperatures[i]) {
                j++;
            }
            answer[i] = j < temperatures.length ? j - i : 0;
        }
        return answer;
    }
}