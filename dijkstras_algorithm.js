const { PriorityQueue, PriorityQueueNode } = require("./priority_queue.js");

function Graph() {
  this.edges = {
    a: [
      { node: "b", weight: 5 },
      { node: "c", weight: 3 },
      { node: "e", weight: 2 }
    ],
    b: [{ node: "d", weight: 2 }],
    c: [
      { node: "b", weight: 1 },
      { node: "d", weight: 1 }
    ],
    d: [
      { node: "h", weight: 1 },
      { node: "a", weight: 1 },
      { node: "g", weight: 2 }
    ],
    e: [
      { node: "a", weight: 1 },
      { node: "h", weight: 4 },
      { node: "i", weight: 7 }
    ],
    f: [
      { node: "b", weight: 3 },
      { node: "g", weight: 1 }
    ],
    g: [
      { node: "i", weight: 2 },
      { node: "c", weight: 3 }
    ],
    h: [
      { node: "c", weight: 2 },
      { node: "g", weight: 2 },
      { node: "f", weight: 2 }
    ],
    i: []
  };
  this.dijkstrasAlgorithm = dijkstrasAlgorithm;
}

function dijkstrasAlgorithm(start, finish) {
  const path_weight = [];
  const previous = [];
  const remaining = new PriorityQueue();
  path_weight[start] = 0;
  remaining.enqueue(new PriorityQueueNode(start, 0));
  Object.keys(this.edges).forEach(e => {
    if (e !== start) {
      path_weight[e] = Infinity;
    }
    previous[e] = null;
  });

  while (!remaining.isEmpty()) {
    const n = remaining.dequeue();
    this.edges[n.element].forEach(e => {
      let w = path_weight[n.element] + e.weight;
      if (w < path_weight[e.node]) {
        path_weight[e.node] = w;
        previous[e.node] = n.element;
        remaining.enqueue(new PriorityQueueNode(e.node, path_weight[e.node]));
      }
    });
  }
  console.log(previous);
  console.log(path_weight);
}

const g = new Graph();
g.dijkstrasAlgorithm("a");
