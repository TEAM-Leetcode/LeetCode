var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    x = stones.pop();
    y = stones.pop();

    if (x >= y) stones.push(x - y);
  }
  return stones[stones.length - 1];
};

let stones = [2, 7, 4, 1, 8, 1];
lastStoneWeight(stones);

//   for (let i = 0; i < stones.length-i; i++) {
//     console.log('stones: ', stones);
//     len = stones.length;

//     x = stones.pop();
//     y = stones.pop();

//     if (x >= y) stones.push(x - y);

//     stones.sort((a, b) => a - b);
//   }

// Priority Queue
var lastStoneWeight = function (stones) {
  const heap = new MaxHeap(stones);
  while (heap.size() > 1) {
    const max1 = heap.poll();
    const max2 = heap.poll();
    if (max1 > max2) heap.offer(max1 - max2);
  }
  return heap.size() === 1 ? heap.poll() : 0;
};

var lastStoneWeight = function (stones) {
  const heap = new MaxHeap(stones);
  while (heap.size() > 1) {
    const max1 = heap.poll();
    const max2 = heap.poll();
    if (max1 > max2) heap.offer(max1 - max2);
  }
  return heap.size() === 1 ? heap.poll() : 0;
};

class MaxHeap {
  constructor(data = []) {
    this.data = data;
    this.comparator = (a, b) => b - a;
    this.heapify();
  }

  // O(nlog(n)). In fact, O(n)
  heapify() {
    if (this.size() < 2) return;
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }

  // O(1)
  peek() {
    if (this.size() === 0) return null;
    return this.data[0];
  }

  // O(log(n))
  offer(value) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }

  // O(log(n))
  poll() {
    if (this.size() === 0) return null;
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return result;
  }

  // O(log(n))
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // O(log(n))
  bubbleDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;
      if (
        leftIndex <= lastIndex &&
        this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }
      if (
        rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }
      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  // O(1)
  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
  }

  // O(1)
  size() {
    return this.data.length;
  }
}
