//DFP
//start with a arbitrary node, push it into stack
//pop the top of stack and print, and mark it as current node
//push all neighbor nodes of  current node into the stack
//repeat until stack is empty

//BFP
//start with a arbitrary node, push it into queue
//shift the front of queue and print, and mark it as current node
//push all neighbor nodes of  current node into the queue from back
//repeat until queue is empty


const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
]

undirectedPath(edges, 'j', 'm');

function undirectedPath(edges, nodeA, nodeB) {
  const graph = buildGraph(edges);
  console.log('graph-->', graph);
  console.log('hasPath-->', hasPath(graph, nodeA, nodeB, new Set()));
  return hasPath(graph, nodeA, nodeB, new Set());
}

function buildGraph(edges) {
  const graph = {};

  for (let edge of edges) {
    const [i, j] = edge;

    if (!(i in graph)) graph[i] = [];
    if (!(j in graph)) graph[j] = [];

    graph[i].push(j);
    graph[j].push(i);
  }
  return graph;
}

function hasPath(graph, src, dst, visited) {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src)

  for (let neighbor in graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }
  return false;
}

