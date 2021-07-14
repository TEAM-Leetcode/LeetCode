//Deque as Value (Time: O(NlogN) Space: O(N))
class Solution {
    public int[] deckRevealedIncreasing(int[] deck) {
        Arrays.sort(deck);
        
        Deque<Integer> deque = new LinkedList<>();
        deque.addLast(deck[deck.length - 1]);
        
        for(int i = deck.length - 2; i >= 0; i--) {
            deque.addFirst(deque.pollLast());
            deque.addFirst(deck[i]);
        }
        
        for(int i = 0; i < deck.length; i++) {
            deck[i] = deque.removeFirst();
        }
        return deck;
    }
}

//Deque as Index (Time: O(NlogN) Space: O(N))
class Solution {
    public int[] deckRevealedIncreasing(int[] deck) {
        Deque<Integer> deque = new LinkedList<>();
        for(int i = 0; i < deck.length; i++)
            deque.add(i);
        
        Arrays.sort(deck);
        int[] reordered = new int[deck.length];
        for(int i = 0; i < deck.length; i++) {
            reordered[deque.removeFirst()] = deck[i];
            if(!deque.isEmpty())
                deque.add(deque.removeFirst());
        }
        return reordered;
    }
}