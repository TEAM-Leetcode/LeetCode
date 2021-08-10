class Solution {
    public String addStrings(String num1, String num2) {
        StringBuilder sb = new StringBuilder();
        int up = 0;
        
        for(int i = 0; i < num1.length() || i < num2.length(); i++) {
            char n1 = i < num1.length() ? num1.charAt(num1.length() - 1 - i) : '0';
            char n2 = i < num2.length() ? num2.charAt(num2.length() - 1 - i) : '0';
            
            int n = n1 + n2 - '0' + up;
            up = n > '9' ? 1 : 0;
            if(up == 1)
                n -= 10;
            sb.append((char)n);
        }
        
        if(up == 1)
            sb.append('1');
        
        return sb.reverse().toString();
    }
}