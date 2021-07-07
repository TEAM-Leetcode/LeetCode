/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */
//Iteration (Time: O(logn) Space: O(1))
public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        int good = 1;
        int bad = n;
        while(good < bad) {
            int check = good + ((bad - good) / 2);
            if(isBadVersion(check))
                bad = check;
            else
                good = check + 1;
        }
        return good;
    }
}

//Recursion (Time: O(logn) Space: O(logn))
public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        return badVersionHelp(1, n);
    }

    private int badVersionHelp(int good, int bad) {
        if(good >= bad)
            return good;

        int check = good + ((bad - good) / 2);
        if(isBadVersion(check))
            return badVersionHelp(good, check);
        else
            return badVersionHelp(check + 1, bad);
    }
}