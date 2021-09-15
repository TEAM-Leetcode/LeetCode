//Counting with Array (Time: O(N) Space: O(1))
class Solution {
    public int maxNumberOfBalloons(String text) {
        int[] count = new int[26];
        
        for(char c: text.toCharArray())
            count[c - 'a']++;
        
        int oneChar = Math.min(count['a' - 'a'], Math.min(count['b' - 'a'], count['n' - 'a']));
        int twoChar = Math.min(count['l' - 'a'], count['o' - 'a']);
        
        return Math.min(oneChar, twoChar / 2);
    }
}

//Pattern Counting with Array by LeetCode (Time: O(N + M) Space: O(1))
class Solution {
    public int maxNumberOfBalloons(String text) {
        String pattern = "balloon";
        return findMaxNumberofPattern(text, pattern);
    }
    
    private int findMaxNumberofPattern(String text, String pattern) {
        int[] countText = new int[26];
        int[] countPattern = new int[26];
        
        for(char c: text.toCharArray())
            countText[c - 'a']++;
        
        for(char c: pattern.toCharArray())
            countPattern[c - 'a']++;
        
        int count = Integer.MAX_VALUE;
        for(int i = 0; i < 26; i++) {
            if(countPattern[i] > 0)
                count = Math.min(count, countText[i] / countPattern[i]);
        }
        return count;
    }
}