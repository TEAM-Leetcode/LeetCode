class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        int[] count = new int[26];
        for(char ch: magazine.toCharArray()) { //bndk
            count[ch - 'a']++;  //count = [0, b1, 0, d1, 0,0,0,k1,0,0,n1,0,000]
        }
        
        for(char ch: ransomNote.toCharArray()) { //bdk
            count[ch - 'a']--;   //count = [0, b0, 0, d0, 0,0,0,k0,0,0,n1,0,000]
            if(count[ch - 'a'] < 0)
                return false;
        }
        return true;
    }
}


class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {        
        char[] orderedRansom = sortString(ransomNote);
        char[] orderedMagazine = sortString(magazine);
        
        int ran = 0;
        int mag = 0;
        while(ran < ransomNote.length() && mag < magazine.length()) {
            if(orderedRansom[ran] == orderedMagazine[mag])
                ran++;
            mag++;
        }
        
        return ran == ransomNote.length();
    }

    private char[] sortString(String str) {
        char[] temp = str.toCharArray();
        Arrays.sort(temp);
        return temp;
    }
}