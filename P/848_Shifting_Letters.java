class Solution {
    public String shiftingLetters(String s, int[] shifts) {
        char[] ch = s.toCharArray();
        int shift = 0;
        
        for(int i = ch.length - 1; i >= 0; i--) {
            shift += shifts[i];
            shift %= 26;
            int newChar = ch[i] + shift;

            if(newChar > 'z')
                newChar -= 26;
            
            ch[i] = (char)newChar;
        }
        return String.valueOf(ch);
    }
}