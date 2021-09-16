// in-place가 아닌 방법
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const left = [];
  const right = [];
  const pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  console.log(`left: [${left}], pivot: ${pivot}, right: [${right}]`);

  return quickSort(left).concat(pivot, quickSort(right));
};

// in-place인 방법
function quickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);

  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);

  quickSort(array, left, partition - 1);
  quickSort(array, partition, right);

  function divide(array, left, right, pivot) {
    console.log(
      `array: ${array}, left: ${array[left]}, pivot: ${pivot}, right: ${array[right]}`,
    );
    while (left <= right) {
      while (array[left] < pivot) left++;
      while (array[right] > pivot) right--;

      if (left <= right) {
        let swap = array[left];
        array[left] = array[right];
        array[right] = swap;
        left++;
        right--;
      }
    }
    return left;
  }

  return array;
}

let array = [4, 1, 7, 6, 3, 8, 2, 5];

quickSort(array);
