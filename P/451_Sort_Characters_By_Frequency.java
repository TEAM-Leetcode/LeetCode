//Array with Regex and Sort (Time: O(NlogN) Space: O(N))
class Solution {
    public String frequencySort(String s) {
        char[] chars = s.toCharArray();
        Arrays.sort(chars);
        s = new String(chars);
        String delimiter = "(?<=(.))(?!\\1)";
        String[] strs = s.split(delimiter);
        
        Arrays.sort(strs, (a, b) -> b.length() - a.length());
        
        StringBuilder sb = new StringBuilder();
        for(String str: strs)
            sb.append(str);
        return sb.toString();
    }
}

//Hash Table (Time: O(NlogN) Space: O(N))
class Solution {
    public String frequencySort(String s) {
        Map<Character, Integer> counts = new HashMap<>();
        for(char c: s.toCharArray())
            counts.put(c, counts.getOrDefault(c, 0) + 1);

        List<Character> chars = new ArrayList<>(counts.keySet());
        Collections.sort(chars, (a, b) -> counts.get(b) - counts.get(a));

        StringBuilder sb = new StringBuilder();
        for(char c: chars) {
            int length = counts.get(c);
            for(int i = 0; i < length; i++)
                sb.append(c);
        }
        return sb.toString();
    }
}

//ArrayList with String Sort by LeetCode (Time: O(NlogN) Space: O(N))
class Solution {
    public String frequencySort(String s) {
        if(s == null || s.isEmpty())
            return s;

        char[] ch = s.toCharArray();
        Arrays.sort(ch);

        List<String> charStrs = new ArrayList<>();
        StringBuilder sb = new StringBuilder();
        sb.append(ch[0]);
        for(int i = 1; i < ch.length; i++) {
            if(ch[i] != ch[i - 1]) {
                charStrs.add(sb.toString());
                sb = new StringBuilder();
            }
            sb.append(ch[i]);
        }
        charStrs.add(sb.toString());

        Collections.sort(charStrs, (a, b) -> b.length() - a.length());

        sb = new StringBuilder();
        for(String str: charStrs)
            sb.append(str);
        return sb.toString();
    }
}

//Hash Table with Bucket Sort by LeetCode (Time: O(N) Space: O(N))
class Solution {
    public String frequencySort(String s) {
        if(s == null || s.isEmpty())
            return s;

        Map<Character, Integer> counts = new HashMap<>();
        for(char c: s.toCharArray())
            counts.put(c, counts.getOrDefault(c, 0) + 1);

        int maxFrequency = Coolections.max(counts.values());

        List<List<Character>> buckets = new ArrayList<>();
        for(int i = 0; i <= maxFrequency; i++)
            buckets.add(new ArrayList<Character>());

        for(Character key: counts.keySet()) {
            int frequency = counts.get(key);
            buckets.get(frequency).add(key);
        }

        StringBuilder sb = new StringBuilder();
        for(int i = buckets.size() - 1; i > 0; i--) {
            for(Character c: buckets.get(i)) {
                for(int j = 0; j < i; j++) {
                    sb.append(c);
                }
            }
        }
        return sb.toString();
    }
}