//Time: O(n^2) Space: O(n^2) where n = numRows
class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> list = new ArrayList<List<Integer>>();
        
        for(int i = 0; i < numRows; i++) {
            List<Integer> arr = new ArrayList<>();
            for(int j = 0; j <= i; j++) {
                if(j == 0 || j == i) {
                    arr.add(1);
                } else {
                    int num = list.get(i - 1).get(j - 1) + list.get(i - 1).get(j);
                    arr.add(num);
                }
            }
            list.add(arr);
        }
        return list;
    }
}