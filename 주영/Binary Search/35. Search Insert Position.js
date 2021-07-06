var searchInsert = function (nums, target) {
  let answer = 0;

  answer = nums.indexOf(target); // 이거 때문에 느렸던 듯
  for (let i = 0; i < nums.length; i++) {
    if (answer === -1) {
      if (nums[i] > target) {
        answer = i;
        return answer;
      }

      if (target > nums[nums.length - 1]) return nums.length;
    }
  }
  return answer;
};

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }
  return answer.length;
};

//----------------------아직 덜 봤음-----------------------//

// Binary Search
function searchInsert(nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
}

function binarySearch(array, target, start, end) {
  // If the target is less then the very last item then insert it at that item index
  // because anything index less then that has already been confirmed to be less then the target.
  // Otherwise insert it at that item index + 1
  // because any index grater then that has already been confirmed to be greater then the target
  if (start > end) return start;

  const midPoint = Math.floor((start + end) / 2);

  // found target
  if (array[midPoint] === target) return midPoint;

  // search the left side
  if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
  // search the right side
  if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}

// Binary Search 2
var searchInsert = function (nums, target) {
  let high = nums.length - 1;
  let low = 0;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (nums[mid] == target) return mid;
    else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

let nums = [1, 3, 5, 6];
let target = 5;
searchInsert(nums, target);
