class Solution {
    public int scoreOfParentheses(String s) {
        Stack<String> stack = new Stack<>();
        
        for(int i = 0; i < s.length(); i++) {
            String ch = s.substring(i, i + 1);
            if(ch.equals("(")) {
                stack.push(ch);
            } else {
                if(stack.peek().equals("(")) { //// ((() -> ((1
                    stack.pop();
                    stack.push("1");
                } else {
                    while(!stack.isEmpty() && !stack.peek().equals("(")) {
                        int first = Integer.parseInt(stack.pop());

                        if(stack.peek().equals("(")) {
                            stack.pop();
                            stack.push(String.valueOf(first * 2));
                            break;
                        } else {
                            int second = Integer.parseInt(stack.pop());
                            int sum = first + second;
                            stack.push(String.valueOf(sum));
                        }
                    }
                }
            }
        }
        int res = 0;
        while(!stack.isEmpty()) {
            res += Integer.parseInt(stack.pop());
        }
        return res;
    }
}

                        /*
                        if(!stack.isEmpty() && !stack.peek().equals("(")) {
                            int second = Integer.parseInt(stack.pop());
                            int sum = first + second;
                            stack.push(String.valueOf(sum));
                        } else {
                            stack.pop();
                            stack.push(String.valueOf(first * 2));
                            break;
                        }
                        */