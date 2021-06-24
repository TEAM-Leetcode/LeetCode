'use strict';

const nextGreaterElement = function(nums1, nums2) {

	let answer = [];

	for (let i = 0; i < nums1.length; i++) {

		let found = false;
		let foundGreater = false;

		for (let j = 0; j < nums2.length; j++) {

			if (nums2[j] === nums1[i]) {
				found = true;	
			}

			if (found && nums2[j] > nums1[i]) {
				answer.push(nums2[j]);
				foundGreater = true;
				break;
			}
		}

		if (found && !foundGreater) answer.push(-1);
	}

	return answer;
}

// let nums1 = [4, 1, 2];
// let nums2 = [1, 3, 4, 2];

// console.log(nextGreaterElement(nums1, nums2));