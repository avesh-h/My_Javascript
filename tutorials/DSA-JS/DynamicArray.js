class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.length = 0;
    this.myArr = new Array(this.capacity).fill(0);
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  get(i) {
    if (this.getSize()) {
      return this.myArr[i];
    }
  }

  /**
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */
  set(i, n) {
    if (this.getSize()) {
      this.myArr[i] = n;
    }
  }

  /**
   * @param {number} n
   * @returns {void}
   */
  pushback(n) {
    if (this.getSize() === this.capacity) {
      this.resize();
    }
    this.myArr[this.length] = n;
    this.length++;
  }

  /**
   * @returns {number}
   */
  popback() {
    if (this.getSize()) {
      this.length--;
    }
    return this.myArr[this.length];
  }

  /**
   * @returns {void}
   */
  resize() {
    this.capacity *= 2;
    const newArr = new Array(this.capacity).fill(0);
    for (let i = 0; i < this.getSize(); i++) {
      newArr[i] = this.myArr[i];
    }
    this.myArr = newArr;
  }

  /**
   * @returns {number}
   */
  getSize() {
    return this.length;
  }

  /**
   * @returns {number}
   */
  getCapacity() {
    return this.capacity;
  }
}
