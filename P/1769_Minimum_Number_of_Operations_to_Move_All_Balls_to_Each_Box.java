class Solution {
    public int[] minOperations(String boxes) {
        int[] answerLtoR = new int[boxes.length()];
        int count = 0;
        for(int i = 0; i < boxes.length() - 1; ++i) {
            if(boxes.charAt(i) == '1')
                count++;
            answerLtoR[i + 1] += answerLtoR[i] + count;
        }
        
        int[] answerRtoL = new int[boxes.length()];
        count = 0;
        for(int i = boxes.length() - 1; i > 0; --i) {
            if(boxes.charAt(i) == '1')
                count++;
            answerRtoL[i - 1] += answerRtoL[i] + count;
        }
        
        int[] answer = new int[boxes.length()];
        for(int i = 0; i < boxes.length(); ++i) {
            answer[i] = answerLtoR[i] + answerRtoL[i];
        }
        
        return answer;
    }
}

//Brute Force
class Solution {
    public int[] minOperations(String boxes) {
        int[] answer = new int[boxes.length()];
        char[] box = boxes.toCharArray();
        
        for(int cur = 0; cur < box.length; ++cur) {
            for(int other = 0; other < box.length; ++other) {
                if(box[other] == '1' && cur != other ) {
                    answer[cur] += Math.abs(cur - other); 
                }
            }
        }
        return answer;
    }
}

//Brute Force
class Solution {
    public int[] minOperations(String boxes) {
        int[] answer = new int[boxes.length()];
        
        for(int i = 0; i < boxes.length(); ++i) {
            if(boxes.charAt(i) == '1') {
                for(int j = 0; j < boxes.length(); ++j) {
                    answer[j] += Math.abs(i - j);
                }
            }
        }
        return answer;
    }
}

//Brute Force
class Solution {
    public int[] minOperations(String boxes) {
        int[] answer = new int[boxes.length()];
        
        List<Integer> ones = new ArrayList<>();
        for(int i = 0; i < boxes.length(); ++i) {
            if(boxes.charAt(i) == '1') {
                ones.add(i);
            }
        }
        
        for(int i = 0; i < boxes.length(); ++i) {
            for(int j = 0; j < ones.size(); ++j) {
                answer[i] += Math.abs(ones.get(j) - i);
            }
        }
        return answer;
    }
}


