//Use Array (Time: O(n) Space: O(1))
class Solution {
	public boolean isAnagram(String s, String t) {
		if(s.length() != t.length())
			return false;

		int[] count = new int[26];
		for(int i = 0; i < s.length(); i++) {
			count[s.charAt(i) - 'a']++;
            count[t.charAt(i) - 'a']--;
		}

		for(int c: count) {
            if(c != 0)
                return false;
        }
        return true;
	}
}

//Sorting (Time: O(nlogn) Space: O(n))
class Solution {
	public boolean isAnagram(String s, String t) {
		if(s.length() != t.length())
			return false;

		char[] strS = s.toCharArray();
		char[] strT = t.toCharArray();
		Arrays.sort(strS);
		Arrays.sort(strT);

		return Arrays.equals(strS, strT);
	}
}

//Use HashTable (Time: O(n) Space: O(n))
class Solution {
	public boolean isAnagram(String s, String t) {
		if(s.length() != t.length())
			return false;

		Map<Character, Integer> map = new HashMap<>();
		for(int i = 0; i < s.length(); i++) {
			char ch = s.charAt(i);
			if(map.containsKey(ch))
				map.replace(ch, map.get(ch) + 1);
			else
				map.put(ch, 1);
		}

		for(int i = 0; i < t.length(); i++) {
			char ch = t.charAt(i);
			if(map.containsKey(ch)) {
				map.replace(ch, map.get(ch) - 1);
				if(map.get(ch) < 0)
					return false;
			} else
				return false;
		}
		return true;
	}
}