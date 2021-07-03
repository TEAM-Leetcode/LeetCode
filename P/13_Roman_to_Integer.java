// I      1  - 1    // IV     4  - 1
// V      5  - 2    // IX     9  - 1
// X     10  - 3    // XL    40  - 3
// L     50  - 4    // XC    90  - 3
// C    100  - 5    // CD   400  - 5
// D    500  - 6    // CM   900  - 5
// M   1000  - 7

// I, X, C      - can be prefix
// V, L, D, M   - can't be prefix
class Solution {
    public int romanToInt(String s) {
        int res = 0;
        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(i) == 'I') {
                res += 1;
            } else if(s.charAt(i) == 'V') {
                res += 5;
                if(i > 0 && s.charAt(i - 1) == 'I')
                    res -= 2;
            } else if(s.charAt(i) == 'X') {
                res += 10;
                if(i > 0 && s.charAt(i - 1) == 'I')
                    res -= 2;
            } else if(s.charAt(i) == 'L') {
                res += 50;
                if(i > 0 && s.charAt(i - 1) == 'X')
                    res -= 20;
            } else if(s.charAt(i) == 'C') {
                res += 100;
                if(i > 0 && s.charAt(i - 1) == 'X')
                    res -= 20;
            } else if(s.charAt(i) == 'D') {
                res += 500;
                if(i > 0 && s.charAt(i - 1) == 'C')
                    res -= 200;
            } else if(s.charAt(i) == 'M') {
                res += 1000;
                if(i > 0 && s.charAt(i - 1) == 'C')
                    res -= 200;
            }
        }
        return res;
    }
}

class Solution {
    public int romanToInt(String s) {
        int res = 0;
        
        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(i) == 'I') {
                if(i < s.length() - 1 && s.charAt(i + 1) == 'V') {
                    res += 4;
                    i++;
                } else if(i < s.length() - 1 && s.charAt(i + 1) == 'X') {
                    res += 9;
                    i++;
                } else {
                    res += 1;
                }
            } else if(s.charAt(i) == 'V') {
                res += 5;
            } else if(s.charAt(i) == 'X') {
                if(i < s.length() - 1 && s.charAt(i + 1) == 'L') {
                    res += 40;
                    i++;
                } else if(i < s.length() - 1 && s.charAt(i + 1) == 'C') {
                    res += 90;
                    i++;
                } else {
                    res += 10;
                }
            } else if(s.charAt(i) == 'L') {
                res += 50;
            } else if(s.charAt(i) == 'C') {
                if(i < s.length() - 1 && s.charAt(i + 1) == 'D') {
                    res += 400;
                    i++;
                } else if(i < s.length() - 1 && s.charAt(i + 1) == 'M') {
                    res += 900;
                    i++;
                } else {
                    res += 100;
                }
            } else if(s.charAt(i) == 'D') {
                res += 500;
            } else if(s.charAt(i) == 'M') {
                res += 1000;
            }
        }
        return res;
    }
}