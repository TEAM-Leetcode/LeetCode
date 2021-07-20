/* The knows API is defined in the parent class Relation.
      boolean knows(int a, int b); */
//Time: O(N) Space: O(1)
public class Solution extends Relation {
    public int findCelebrity(int n) {
        int candidate = 0;
        for(int other = 1; other < n; other++) {
            if(knows(candidate, other)) {
                candidate = other;
            }
        }
        
        for(int other = 0; other < n; other++) {
            if(candidate != other && (knows(candidate, other) || !knows(other, candidate)))
                return -1;
        }
        return candidate;
    }
}

//Brutal Force Count (Time: O(N^2) Space: O(1))
public class Solution extends Relation {
    public int findCelebrity(int n) {
        int[] famous = new int[n];
        
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if(knows(i, j)) {
                    if(i != j)
                        famous[i]--;
                    famous[j]++;
                }
            }
        }
        
        for(int i = 0; i < n; i++) {
            if(famous[i] == n)
                return i;
        }
        return -1;
    }
}

//Hash Set Optimized Brutal Force (Time: O(N^2) Space: O(N))
public class Solution extends Relation {
    public int findCelebrity(int n) {
        Set<Integer> candidates = new HashSet<>();
        for(int i = 0; i < n; i++)
            candidates.add(i);
        
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if(i != j && knows(i, j)) {
                    candidates.remove(i);
                    break;
                }
            }
        }
        
        for(Object c: candidates.toArray()) {
            int candidate = (int) c;
            for(int other = 0; other < n; other++) {
                if(candidate != other && !knows(other, candidate))
                    break;
                if(other == n - 1)
                    return candidate;
            }
        }
        return -1;
    }
}

//Two Arrays (Time: O(N^2) Space: O(1))
public class Solution extends Relation {
    public int findCelebrity(int n) {
        int[] following = new int[n];
        int[] followed = new int[n];
        
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if(i != j && knows(i, j)) {
                    following[i]++;
                    followed[j]++;
                }
            }
        }
        
        for(int i = 0; i < n; i++) {
            if(following[i] == 0 && followed[i] == n - 1)
                return i;
        }
        return - 1;
    }
}

//TreeSet Optimized Brutal Force (Time: O(N^2) Space: O(N))
public class Solution extends Relation {
    public int findCelebrity(int n) {
        TreeSet<Integer> candidates = new TreeSet<>();
        for(int i = 0; i < n; i++)
            candidates.add(i);
        
        int candidate = candidates.first();
        while(!candidates.isEmpty()) {
            for(int other = 0; other < n; other++) {
                if(candidate != other && knows(candidate, other))
                    candidates.remove(candidate);
                
                if(candidate != other && !knows(other, candidate))
                    candidates.remove(candidate);

                if(candidates.contains(candidate) && other == n - 1)
                    return candidate;
                
                if(!candidates.isEmpty() && !candidates.contains(candidate)) {
                    candidate = candidates.first();
                    other = -1;
                }
            }
        }
        return -1;
    }
}
