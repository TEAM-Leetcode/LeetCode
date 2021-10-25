var rotateString = function (A, B) {
  if (A === B) return true;

  for (let char of A) {
    A = A.slice(1) + A.slice(0, 1);
    if (A === B) return true;
  }
  return false;
};
let s = 'bbbacddceeb',
  goal = 'ceebbbbacdd';

rotateString(s, goal);
