function Vertex(label) {
  this.label = label;
}

function Graph(v) {
  this.edges = 0;
  this.adj = [];
  this.marked = [];
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.edgeTo = [];
  this.dfs = dfs;
  this.bfs = bfs;
  this.pathTo = pathTo;
}

function addEdge(v, w) {
  if (this.adj[v] === undefined) {
    this.adj[v] = [w];
  } else {
    this.adj[v].push(w);
  }

  if (this.adj[w] === undefined) {
    this.adj[w] = [v];
  } else {
    this.adj[w].push(v);
  }

  this.edges++;
}

function showGraph() {
  this.adj.forEach((element, idx) => {
    console.log(idx + " > " + element);
  });
}

function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] !== undefined) {
    console.log("Visited vertex : " + v);
  }
  this.adj[v].forEach(e => {
    if (!this.marked[e]) {
      this.dfs(e);
    }
  });
}

function bfs(s) {
  const queue = [];
  this.marked[s] = true;
  queue.push(s);
  while (queue.length > 0) {
    const v = queue.shift();
    if (v !== undefined) {
      console.log("Visited vertex : " + v);
    }
    this.adj[v].forEach(e => {
      if (!this.marked[e]) {
        // edge to for find path
        this.edgeTo[e] = v;
        this.marked[e] = true;
        queue.push(e);
      }
    });
  }
}

function pathTo(v) {
  this.bfs(v);
  if (!this.marked[v]) {
    return undefined;
  }
  console.log(this.edgeTo);
  var path = [];
  let i = 0;
  while (i !== undefined) {
    path.push(i);
    i = this.edgeTo[i];
  }
  console.log(path.join("-"));
}

const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(2, 4);
g.addEdge(3, 4);
g.showGraph();
// g.dfs(0);
// g.bfs(4);
g.pathTo(4);
