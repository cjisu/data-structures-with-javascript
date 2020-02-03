function PriorityQueue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.isEmpty = isEmpty;
  this.front = front;
  this.back = back;
  this.toString = toString;
}

function PriorityQueueNode(element, priority) {
  this.element = element;
  this.priority = priority;
}

function enqueue(element) {
  this.dataStore.push(element);
}

function dequeue() {
  if (!this.isEmpty()) {
    let entry = 0;
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i].priority < this.dataStore[entry].priority) {
        entry = i;
      }
    }
    return this.dataStore.splice(entry, 1);
  }
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
    console.log(
      idx + " : " + "element - " + e.element + ", priority - " + e.priority
    );
  });
}

const queue = new PriorityQueue();
const qe1 = new PriorityQueueNode(1, 4);
const qe2 = new PriorityQueueNode(2, 2);
const qe3 = new PriorityQueueNode(3, 3);
const qe4 = new PriorityQueueNode(4, 1);
queue.enqueue(qe1);
queue.enqueue(qe2);
queue.enqueue(qe3);
queue.enqueue(qe4);
console.log("queue front", queue.front());
console.log("queue back", queue.back());
console.log("current queue");
queue.toString();
queue.dequeue();
console.log("current queue");
queue.toString();
queue.dequeue();
console.log("current queue");
queue.toString();
queue.dequeue();
console.log("current queue");
queue.toString();
queue.dequeue();
console.log("current queue");
queue.toString();
