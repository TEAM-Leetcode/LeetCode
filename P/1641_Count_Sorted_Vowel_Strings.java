class Solution {
    public int countVowelStrings(int n) {
        int a = 1;
        int e = 1;
        int i = 1;
        int o = 1;
        int u = 1;
        for(int time = 1; time < n; time++) {
            int prevE = e;
            int prevI = i;
            int prevO = o;
            int prevU = u;
            e += a;
            i += a + prevE;
            o += a + prevE + prevI;
            u += a + prevE + prevI + prevO;
        }
        return a + e + i + o + u;
    }
}