class Solution {
    public int titleToNumber(String columnTitle) {
        int column = 0;
        for(int i = 0; i < columnTitle.length(); i++) {
            int num = columnTitle.charAt(i) - 'A' + 1;
            column = column * 26 + num;
        }
        return column;
    }
}

class Solution {
    public int titleToNumber(String columnTitle) {
        int column = 0;
        for(int i = 0; i < columnTitle.length(); i++) {
            int num = columnTitle.charAt(i) - 'A' + 1;
            double multiple = Math.pow(26, columnTitle.length() - i - 1);
            num *= (int) multiple;
            column += num;
        }
        return column;
    }
}

class Solution {
    public int titleToNumber(String columnTitle) {
        int column = 0;
        for(int i = columnTitle.length() - 1; i >= 0; i--) {
            int num = columnTitle.charAt(i) - 'A' + 1;
            double multiple = Math.pow(26, columnTitle.length() - i - 1);
            num *= (int) multiple;
            column += num;
        }
        return column;
    }
}