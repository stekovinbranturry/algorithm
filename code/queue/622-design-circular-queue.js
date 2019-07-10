class MyCircularQueue {
  constructor(k) {
    this.queue = Array(k);
    this.k = k;
    this.length = 0; // length of items having value
    this.front = 0;
    this.rear = 0;
  }
  enQueue(value) {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.k;
    this.length += 1;
    return true;
  }
  deQueue() {
    if (this.isEmpty()) {
      return false;
    }
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.k;
    this.length -= 1;
    return true;
  }
  Front() {
    return this.isEmpty() ? -1 : this.queue[this.front];
  }
  Rear() {
    return this.isEmpty()
      ? -1
      : this.queue[this.rear === 0 ? this.k - 1 : this.rear - 1];
  }
  isEmpty() {
    return this.length === 0;
  }
  isFull() {
    return this.length === this.k;
  }
}

export default MyCircularQueue;
