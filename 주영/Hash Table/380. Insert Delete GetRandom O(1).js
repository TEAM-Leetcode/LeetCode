class RandomizedSet {
  constructor() {
    (this.map = new Map()), (this.arr = []);
  }

  insert(val) {
    if (this.map.has(val)) return false;
    this.map.set(val, this.arr.length);
    this.arr.push(val);

    return true;
  }

  remove(val) {
    if (!this.map.has(val)) return false;
    let deletedIndex = this.map.get(val);
    this.arr[deletedIndex] = this.arr[this.arr.length - 1];
    this.map.set(this.arr[deletedIndex], deletedIndex);
    this.map.delete(val);
    this.arr.pop();

    return true;
  }

  getRandom() {
    let randomIndex = Math.floor(Math.random() * this.arr.length);
    return this.arr[randomIndex];
  }
}
