let nums = [1,3,5,6], target = 5
let i;
for (i = 0; i < nums.length; i++ ) {
  console.log(i);
  if (nums[i] === target) {
    return i;
  }
  if (target < nums[i]) {
    return i;
  }
}
return i;