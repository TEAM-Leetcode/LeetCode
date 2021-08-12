//Brutal Force
class Solution {
    public boolean canReorderDoubled(int[] arr) {
        Arrays.sort(arr);
        List<Integer> list = new ArrayList<>();
        for(int n: arr)
            list.add(n);
        
        while(!list.isEmpty()) {
            int n = list.get(0);
            if(n < 0) {
                int i = list.indexOf(n / 2);
                if(-n % 2 != 0 || i == -1)
                    return false;
                list.remove(i);
            } else {
                int i = list.indexOf(n * 2);
                if(i == -1)
                    return false;
                list.remove(i);
            }
            list.remove(0);
        }
        return true;
    }
}

//Array
class Solution {
    public boolean canReorderDoubled(int[] arr) {
        int offset = 100000;
        int[] count = new int[offset * 2 + 1];
        
        for(int n: arr)
            count[n + offset]++;
        
        int i = 0;
        while(i < offset * 2 + 1) {
            if(count[i] != 0) {
                count[i]--;
                int n = i - offset;
                if(n < 0 && -n % 2 == 1)
                    return false;
                n = n < 0 ? n / 2 : n * 2;
                if(n + offset > offset * 2 || count[n + offset] < 0)
                    return false;
                count[n + offset]--;
            } else {
                i++;
            }
        }
        return true;
    }
}