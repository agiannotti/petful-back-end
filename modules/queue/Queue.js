// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // Add some data to the queue.
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    // Make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    // Remove some data from the queue.
    // if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    // If this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }

  show() {
    // Return the next item in the queue.
    if (this.first === null) {
      return null;
    }
    return this.first.value;
  }

  all() {
    // Return all items in the queue.
    let node = this.first;
    let allArray = [];

    if (node === null) {
      return;
    }
    while (node !== null) {
      allArray.push(node.value);
      node = node.next;
    }

    return allArray;
  }
}

module.exports = Queue;
