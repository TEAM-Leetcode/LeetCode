class Solution {
    static Map<Character, String> keyPads = new HashMap<>();
    static {
        keyPads.put('2', "abc");
        keyPads.put('3', "def");
        keyPads.put('4', "ghi");
        keyPads.put('5', "jkl");
        keyPads.put('6', "mno");
        keyPads.put('7', "pqrs");
        keyPads.put('8', "tuv");
        keyPads.put('9', "wxyz");
    }
    
    public List<String> letterCombinations(String digits) {
        if(digits.length() == 0)
            return new ArrayList<String>();
        
        List<String> comb = new ArrayList<>();
        comb.add("");
        char[] digit = digits.toCharArray();
        
        for(int i = 0; i < digit.length; i++) {
            char key = digit[i];
            char[] ch = keyPads.get(key).toCharArray();
            int keyLength = ch.length;
 
            List<String> newComb = new ArrayList<>();
            for(int j = 0; j < comb.size(); j++) {
                for(int k = 0; k < keyLength; k++) {
                    String str = comb.get(j) + ch[k]; //ch.substring(k, k + 1);
                    newComb.add(str);
                }
            }
            comb = newComb;
        }
        return comb;
    }
}


class Solution {
    static Map<Character, String> keyPads = new HashMap<>();
    static {
        keyPads.put('2', "abc");
        keyPads.put('3', "def");
        keyPads.put('4', "ghi");
        keyPads.put('5', "jkl");
        keyPads.put('6', "mno");
        keyPads.put('7', "pqrs");
        keyPads.put('8', "tuv");
        keyPads.put('9', "wxyz");
    }
    
    public List<String> letterCombinations(String digits) {
        if(digits.length() == 0)
            return new ArrayList<String>();
        
        List<String> comb = new ArrayList<>();
        comb.add("");
        char[] digit = digits.toCharArray();
        
        for(int i = 0; i < digit.length; i++) {
            char key = digit[i];
            char[] ch = keyPads.get(key).toCharArray();
            int keyLength = ch.length;
            int combSize = comb.size();
            
            for(int j = 0; j < combSize; j++) {
                for(int k = 0; k < keyLength; k++) {
                    comb.add(comb.get(j) + ch[k]);
                }
            }
            comb = comb.subList(combSize, comb.size());
        }
        return comb;
    }
}