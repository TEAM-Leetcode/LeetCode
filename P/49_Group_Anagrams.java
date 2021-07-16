//Sorting String (Time: O(NMlogM) SPace: O(NM)) Where N is strs.length and M is strs[i].length
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        
        for(int i = 0; i < strs.length; i++) {
            char[] charArr = strs[i].toCharArray();
            Arrays.sort(charArr);
            String sortedStr = String.valueOf(charArr);
            
            if(!map.containsKey(sortedStr))
                map.put(sortedStr, new ArrayList<String>());

            map.get(sortedStr).add(strs[i]);
        }
        return new ArrayList<>(map.values());
    }
}

//Counting String by LeetCode (Time: O(NM) Space: O(NM)) Where N is strs.length and M is strs[i].length
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        int[] count = new int[26];
        for(String str: strs) {
            for(char ch: str.toCharArray())
                count[ch - 'a']++;

            StringBuilder sb = new StringBuilder();
            for(int i = 0; i < count.length; i++)
                sb.append(count[i] + "#");

            String codedStr = sb.toString();
            if(!map.containsKey(codedStr))
                map.put(codedStr, new ArrayList<String>());

            map.get(codedStr).add(str);
            Arrays.fill(count, 0);
        }
        return new ArrayList<>(map.values());
    }
}