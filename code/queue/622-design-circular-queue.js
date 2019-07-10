class MyCircularQueue {
  constructor(k) {
    this.queue = Array(k);
    this.len = k;
    this.front = 0;
    this.rear = 0;
  }
  enQueue(value) {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.len;
    return true;
  }
  deQueue() {
    if (this.isEmpty()) {
      return false;
    }
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.len;
    return true;
  }
  Front() {
    return this.isEmpty() ? -1 : this.queue[this.front];
  }
  Rear() {
    return this.isEmpty()
      ? -1
      : this.queue[this.rear === 0 ? this.len - 1 : this.rear - 1];
  }
  isEmpty() {
    return this.front === this.rear && !this.queue[this.front];
  }
  isFull() {
    return this.front === this.rear && !!this.queue[this.front];
  }
}

export default MyCircularQueue;
