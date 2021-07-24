class Solution {
    public boolean isIsomorphic(String s, String t) {
        if(s.length() != t.length())
            return false;
        
        Map<Character, Character> isomorphic = new HashMap<>();
        Set<Character> values = new HashSet<>();

        char[] sChar = s.toCharArray();
        char[] tChar = t.toCharArray();
        
        for(int i = 0; i < s.length(); i++) {
            if(!isomorphic.containsKey(sChar[i])) {
                isomorphic.put(sChar[i], tChar[i]);
                if(values.contains(tChar[i]))
                    return false;
                values.add(tChar[i]);
            }
        }

        for(int i = 0; i < s.length(); i++) {
           if(isomorphic.get(sChar[i]) != tChar[i])
               return false;
        }
        return true;
    }
}