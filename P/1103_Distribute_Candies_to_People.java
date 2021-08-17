//Brute Force
class Solution {
    public int[] distributeCandies(int candies, int num_people) {
        int[] ans = new int[num_people];
        
        int turn = 0;
        int candy = 1;
        while(candies > 0) {
            ans[turn] += candies - candy >= 0 ? candy : candies;
            candies -= candy++;
            turn = (turn + 1) % num_people;
        }
        return ans;
    }
}