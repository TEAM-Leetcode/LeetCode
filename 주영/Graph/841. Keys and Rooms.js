var canVisitAllRooms = function (rooms) {
  const uniqueKeys = new Set([0]); // 어차피 중복된 키는 소용이 없기 때문에 유일한 값을 저장하기 위해 set을 사용한다.
  const stack = [0]; // 0번째 키는 반드시 있기 때문에 0을 넣어준다.

  while (stack.length) {
    let currentKey = stack.pop(); // stack의 가장 위에 있는 key를 pop해주고

    rooms[currentKey].forEach(key => {
      if (!uniqueKeys.has(key)) {
        // 해당 키가 set에 없던 키라면
        uniqueKeys.add(key); // uniqueKeys에도 넣어주고
        stack.push(key); // stack에도 넣어준다.
      }
    });
  }

  // 결국 uniqueKeys랑 rooms 배열의 길이가 같으면 그게 답이 된다.
  return uniqueKeys.size === rooms.length;
};

let rooms = [[1, 3], [3, 0, 1], [2], [0]];
canVisitAllRooms(rooms);
