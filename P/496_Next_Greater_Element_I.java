
class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        Map<Integer, Integer> map = new HashMap<>();
        Stack<Integer> nums = new Stack<>();
        
        for(int i = 0; i < nums2.length - 1; i++) {
            while(!nums.isEmpty() && nums.peek() < nums2[i + 1]) {
                map.put(nums.pop(), nums2[i + 1]);
            }
            
            if(nums2[i] < nums2[i + 1]) {
                map.put(nums2[i], nums2[i + 1]);
            } else {
                nums.push(nums2[i]);
            }
        }

        for(int i = 0; i < nums1.length; i++) {
            nums1[i] = map.containsKey(nums1[i]) ? map.get(nums1[i]) : -1;
        }
        return nums1;
    }
}

class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        Map<Integer, Integer> map = new HashMap<>();
        Stack<Integer> nums = new Stack<>();
        
        for(int i = 0; i < nums2.length; i++) {
            while(!nums.isEmpty() && nums.peek() < nums2[i]) {
                map.put(nums.pop(), nums2[i]);
            }
            nums.push(nums2[i]);
        }

        for(int i = 0; i < nums1.length; i++) {
            nums1[i] = map.containsKey(nums1[i]) ? map.get(nums1[i]) : -1;
        }
        return nums1;
    }
}