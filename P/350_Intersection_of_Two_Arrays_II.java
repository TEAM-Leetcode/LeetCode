//Using HashMap(Time:O(n) Space:O(n1 + n2))
class Solution {
	public int[] intersect(int[] nums1, int[] nums2) {
		HashMap<Integer, Integer> map = new HashMap<>();
		List<Integer> arr = new ArrayList<>();
		for(int num: nums1)
            map.put(num, map.getOrDefault(num, 0) + 1);

		for(int num: nums2) {
			if(map.containsKey(num) && map.get(num) > 0) {
				arr.add(num);
				map.put(num, map.get(num) - 1);
			}
		}

		int[] intersect = new int[arr.size()];
		for(int i = 0; i < arr.size(); i++)
			intersect[i] = arr.get(i);

		return intersect;
	}
}

//Using ArrayList(Time:O(n^2) Space:O(n1 + n2))
class Solution {
	public int[] intersect(int[] nums1, int[] nums2) {
		List<Integer> arr = new ArrayList<>();
		for(int num: nums1) {
			arr.add(num);
		}

		List<Integer> intersect = new ArrayList<>();
		for(int num: nums2) {
			if(arr.isEmpty())
				break;

			int index = arr.indexOf(num);
			if(index > -1)
				intersect.add(arr.remove(index));
		}

		int[] inter = new int[intersect.size()];
		for(int i = 0; i < intersect.size(); i++) {
			inter[i] = intersect.get(i);
		}

		return inter;
	}
}