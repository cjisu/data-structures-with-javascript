function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.isEmpty = isEmpty;
  this.front = front;
  this.back = back;
  this.toString = toString;
}

function enqueue(element) {
  this.dataStore.push(element);
}

function dequeue() {
  return this.dataStore.shift();
}

function isEmpty() {
  return this.dataStore.length > 0 ? false : true;
}

function front() {
  if (!this.isEmpty()) {
    return this.dataStore[0];
  }
  return undefined;
}

function back() {
  if (!this.isEmpty()) {
    return this.dataStore[this.dataStore.length - 1];
  }
  return undefined;
}

function toString() {
  this.dataStore.forEach((e, idx) => {
    console.log(idx + " : " + e);
  });
}

// const queue = new Queue();
// console.log("is empty queue", queue.isEmpty());
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// console.log("queue front", queue.front());
// console.log("queue back", queue.back());
// console.log("current queue");
// queue.toString();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// console.log("current queue");
// queue.toString();

exports.Queue = Queue;
