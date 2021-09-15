function containsPattern(arr, length, repetition) {
  const delta = length * repetition;

  for (let i = 0; i + delta <= arr.length; i++) {
    const pattern = arr.slice(i, i + delta).join('');

    if (pattern.slice(0, length).repeat(repetition) === pattern) {
      return true;
    }
  }

  return false;
}
