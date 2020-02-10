const { TestArray } = require("./test_array.js");
const { Queue } = require("./queue");

function findMax(arr) {
  let max = arr.dataStore[0];
  for (let i = 1; i < arr.dataStore.length; i++) {
    if (arr.dataStore[i] > max) {
      max = arr.dataStore[i];
    }
  }
  return max;
}

function radix_sort(arr) {
  const maxLength = String(findMax(arr)).length;
  let radix = Math.pow(10, maxLength);
  const queues = [];
  for (let r = 10; r <= radix; r *= 10) {
    for (let j = 0; j < arr.dataStore.length; j++) {
      const bucket = parseInt(arr.dataStore[j] % r);
      if (queues[bucket] === undefined) {
        queues[bucket] = new Queue();
      }
      const q = queues[bucket];
      q.enqueue(arr.dataStore[j]);
    }

    let pos = 0;
    for (let i = 0; i < queues.length; i++) {
      const q = queues[i];
      if (q !== undefined) {
        while (!q.isEmpty()) {
          arr.dataStore[pos++] = q.dequeue();
        }
      }
    }
  }
}
[];

const tArr = new TestArray(100);
tArr.toString();
radix_sort(tArr);
tArr.toString();
