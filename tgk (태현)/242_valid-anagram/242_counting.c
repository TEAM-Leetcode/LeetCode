bool isAnagram(char * s, char * t){
    // C로 counting sort를 이용해 재미있게 풀어 봤습니다
    int lenS = strlen(s);
    int lenT = strlen(t);
    
    if (lenS != lenT) {
        return false;
    }
    
    int count[26] = {0};
    
    for (int i = 0 ; i < lenS ; i++) {
        count[s[i] - 'a']++;
    }
    
    for (int i = 0 ; i < lenT ; i++) {
        count[t[i] - 'a']--;
    }
    
    for (int i = 0 ; i < 26 ; i++) {
        if (count[i] != 0) {
            return false;
        }
    }
    return true;
}