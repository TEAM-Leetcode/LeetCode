//Array (Time: O(N) Space: O(1))
class Solution {
    public char findTheDifference(String s, String t) {
        int[] count = new int[26];
        
        for(int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            count[ch - 'a']++;
        }
        
        for(int i = 0; i < t.length(); i++) {
            char ch = t.charAt(i);
            count[ch - 'a']--;
        }
        
        char diff = 0;
        for(int i = 0; i < count.length; i++) {
            if(count[i] != 0)
                diff = (char) (i + 'a');
        }
        return diff;
    }
}

//HashMap (Time: O(N) Space: O(1))
class Solution {
    public char findTheDifference(String s, String t) {
        Map<Character, Integer> map = new HashMap<>();
        for(int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if(map.containsKey(ch))
                map.put(ch, map.get(ch) + 1);
            else
                map.put(ch, 1);
        }
        
        for(int i = 0; i < t.length(); i++) {
            char ch = t.charAt(i);
            if(map.containsKey(ch)) {
                if(map.get(ch) == 0)
                    return ch;
                map.put(ch, map.get(ch) - 1);
            } else {
                return ch;
            }
        }
        
        return '\n';
    }
}

//Bit Manipulation (Time: O(N) Space: O(1))
class Solution {
    public char findTheDifference(String s, String t) {
        char ch = t.charAt(t.length () - 1);
        for(int i = 0; i < s.length(); i++) {
            ch ^= s.charAt(i);
            ch ^= t.charAt(i);
        }
        return ch;
    }
}